export { RotatorFR, RotatorFL, RotatorBR, RotatorBL, RotatorLF, RotatorLB, RotatorRF, RotatorRB };
class Rotator {
  constructor(pX, pY, pZ, scene) {
    this.scene = scene;
    this.initInstance(pX, pY, pZ);
    this.setPhysics();
  }

  initInstance(pX, pY, pZ) {
    if (Rotator.builder && Rotator.builder._scene != this.scene.scene) {
      Rotator.builder.dispose();
      Rotator.builder = undefined;
    }

    if (!Rotator.builder) {
      Rotator.builder = BABYLON.MeshBuilder.CreateTorus("torus", { tessellation: 6, thickness: 0.5, diameter: 2 });
      Rotator.builder.rotation.z = Math.PI / 2;

      Rotator.builder.name = `rotator_${pX}_${pY}_${pZ}`;

      Rotator.builder.material = this.scene.assetsManager.Materials["Simple #NJXV5A#12"];

      this.plane = BABYLON.Mesh.CreatePlane("rotator_arrow", 1.5);
      this.plane.parent = Rotator.builder;
      this.plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
      this.plane.position.y = 1.5;

      var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(this.plane);

      advancedTexture.parseContent(this.scene.assetsManager.Textures["Arrow"]);

      this.box = Rotator.builder;
    } else {
      this.box = Rotator.builder.createInstance(`rotator_${pX}_${pY}_${pZ}`);
    }
    this.box.alwaysSelectAsActiveMesh = true;
    this.box.position = new BABYLON.Vector3(pX, pY + 0.1, pZ);
  }

  setPhysics() {
    this.box.checkCollisions = true;

    this.box.actionManager = new BABYLON.ActionManager(this.scene.scene);
    this.box.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        {
          trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
          parameter: {
            mesh: this.scene.player.mesh,
          },
        },
        () => this.onPlayerCollision()
      )
    );
    /*
    this.box.setBoundingInfo(
      new BABYLON.BoundingInfo(
        BABYLON.Vector3.Minimize(this.box.getBoundingInfo().boundingBox.minimum, new BABYLON.Vector3(0, 0, 0)),
        BABYLON.Vector3.Maximize(this.box.getBoundingInfo().boundingBox.maximum, new BABYLON.Vector3(0, 10, 0))
      )
    );*/
  }

  rotate(orientation, from, to, angular, linear) {
    this.scene.player.orientation = orientation;
    BABYLON.Animation.CreateAndStartAnimation(
      this.constructor.name,
      this.scene.camera,
      "alpha",
      1.5,
      1,
      BABYLON.Tools.ToRadians(from),
      BABYLON.Tools.ToRadians(to),
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    this.scene.player.resetRotation();
    let av = this.scene.player.mesh.physicsImpostor.getAngularVelocity();
    this.scene.player.mesh.physicsImpostor.setAngularVelocity(
      new BABYLON.Vector3(av.z * angular.x, av.y * angular.y, av.x * angular.z)
    );
    let al = this.scene.player.mesh.physicsImpostor.getLinearVelocity();
    this.scene.player.mesh.physicsImpostor.setLinearVelocity(
      new BABYLON.Vector3(al.z * linear.x, al.y * linear.y, al.x * linear.z)
    );
  }
}

class RotatorFR extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("right", 270, 180, new BABYLON.Vector3(1, 0, 1), new BABYLON.Vector3(-1, 1, -1));
  }
}

class RotatorFL extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("left", 270, 360, new BABYLON.Vector3(-1, 0, 1), new BABYLON.Vector3(1, 1, 1));
  }
}

class RotatorBR extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("right", 90, 180, new BABYLON.Vector3(-1, 0, 1), new BABYLON.Vector3(1, 1, 1));
  }
}

class RotatorBL extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("left", 90, 180, new BABYLON.Vector3(1, 0, 1), new BABYLON.Vector3(1, 1, 1));
  }
}

class RotatorRF extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("front", 180, 270, new BABYLON.Vector3(1, 0, 1), new BABYLON.Vector3(-1, 1, 1));
  }
}

class RotatorRB extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("back", 180, 90, new BABYLON.Vector3(1, 0, -1), new BABYLON.Vector3(1, 1, 1));
  }
}

class RotatorLF extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("front", 360, 270, new BABYLON.Vector3(1, 0, -1), new BABYLON.Vector3(1, 1, 1));
  }
}

class RotatorLB extends Rotator {
  constructor(pX, pY, pZ, scene) {
    super(pX, pY, pZ, scene);
  }

  onPlayerCollision() {
    this.rotate("back", 0, 90, new BABYLON.Vector3(1, 0, 1), new BABYLON.Vector3(-1, 1, 1));
  }
}
