package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::DiskAttachment</code>, which is used to attach a disk to an Elastic Compute Service (ECS) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.153Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DiskAttachment")
public class DiskAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IDiskAttachment {

    protected DiskAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DiskAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DiskAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DiskAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DiskAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DiskAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Device: The device where the volume is exposed on ecs instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDevice() {
        return software.amazon.jsii.Kernel.get(this, "attrDevice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskId: The disk id of created disk.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Status: The disk status now.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DiskAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.DiskAttachmentProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.DiskAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.DiskAttachment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.DiskAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.DiskAttachmentProps.Builder();
        }

        /**
         * Property diskId: The disk id to attached.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The disk id to attached. This parameter is required.
         */
        public Builder diskId(final java.lang.String diskId) {
            this.props.diskId(diskId);
            return this;
        }
        /**
         * Property diskId: The disk id to attached.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The disk id to attached. This parameter is required.
         */
        public Builder diskId(final com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.props.diskId(diskId);
            return this;
        }

        /**
         * Property instanceId: The instanceId to attach the disk.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instanceId to attach the disk. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The instanceId to attach the disk.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instanceId to attach the disk. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property bootable: Whether the disk is bootable.
         * <p>
         * @return {@code this}
         * @param bootable Property bootable: Whether the disk is bootable. This parameter is required.
         */
        public Builder bootable(final java.lang.Boolean bootable) {
            this.props.bootable(bootable);
            return this;
        }
        /**
         * Property bootable: Whether the disk is bootable.
         * <p>
         * @return {@code this}
         * @param bootable Property bootable: Whether the disk is bootable. This parameter is required.
         */
        public Builder bootable(final com.aliyun.ros.cdk.core.IResolvable bootable) {
            this.props.bootable(bootable);
            return this;
        }

        /**
         * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
         * <p>
         * Default to true.
         * <p>
         * @return {@code this}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. This parameter is required.
         */
        public Builder deleteAutoSnapshot(final java.lang.Boolean deleteAutoSnapshot) {
            this.props.deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }
        /**
         * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
         * <p>
         * Default to true.
         * <p>
         * @return {@code this}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. This parameter is required.
         */
        public Builder deleteAutoSnapshot(final com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.props.deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }

        /**
         * Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
         * <p>
         * @return {@code this}
         * @param deleteWithInstance Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted. This parameter is required.
         */
        public Builder deleteWithInstance(final java.lang.Boolean deleteWithInstance) {
            this.props.deleteWithInstance(deleteWithInstance);
            return this;
        }
        /**
         * Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
         * <p>
         * @return {@code this}
         * @param deleteWithInstance Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted. This parameter is required.
         */
        public Builder deleteWithInstance(final com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
            this.props.deleteWithInstance(deleteWithInstance);
            return this;
        }

        /**
         * Property device: The device where the volume is exposed on the instance.
         * <p>
         * could be /dev/xvd[b-z]. If not specification, will use default value.
         * <p>
         * @return {@code this}
         * @param device Property device: The device where the volume is exposed on the instance. This parameter is required.
         */
        public Builder device(final java.lang.String device) {
            this.props.device(device);
            return this;
        }
        /**
         * Property device: The device where the volume is exposed on the instance.
         * <p>
         * could be /dev/xvd[b-z]. If not specification, will use default value.
         * <p>
         * @return {@code this}
         * @param device Property device: The device where the volume is exposed on the instance. This parameter is required.
         */
        public Builder device(final com.aliyun.ros.cdk.core.IResolvable device) {
            this.props.device(device);
            return this;
        }

        /**
         * Property force: Whether to force the operation.
         * <p>
         * @return {@code this}
         * @param force Property force: Whether to force the operation. This parameter is required.
         */
        public Builder force(final java.lang.Boolean force) {
            this.props.force(force);
            return this;
        }
        /**
         * Property force: Whether to force the operation.
         * <p>
         * @return {@code this}
         * @param force Property force: Whether to force the operation. This parameter is required.
         */
        public Builder force(final com.aliyun.ros.cdk.core.IResolvable force) {
            this.props.force(force);
            return this;
        }

        /**
         * Property instanceType: The instance type.
         * <p>
         * Allowed values are LingJun and ECS, Default is ECS.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type.
         * <p>
         * Allowed values are LingJun and ECS, Default is ECS.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property password: The password for the disk.
         * <p>
         * @return {@code this}
         * @param password Property password: The password for the disk. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password for the disk.
         * <p>
         * @return {@code this}
         * @param password Property password: The password for the disk. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.DiskAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.DiskAttachment build() {
            return new com.aliyun.ros.cdk.ecs.DiskAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
