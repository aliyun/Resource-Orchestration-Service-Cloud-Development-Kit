package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::SSHKeyPairAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:48.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SSHKeyPairAttachment")
public class SSHKeyPairAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected SSHKeyPairAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SSHKeyPairAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::SSHKeyPairAttachment</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SSHKeyPairAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SSHKeyPairAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::SSHKeyPairAttachment</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SSHKeyPairAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SSHKeyPairAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SSHKeyPairAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SSHKeyPairAttachment> {
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
        private final com.aliyun.ros.cdk.ecs.SSHKeyPairAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SSHKeyPairAttachmentProps.Builder();
        }

        /**
         * Property instanceIds: The comma delimited ECS instance id list.
         * <p>
         * Only support Linux.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The comma delimited ECS instance id list. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The comma delimited ECS instance id list.
         * <p>
         * Only support Linux.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The comma delimited ECS instance id list. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
         * <p>
         * Default: false
         * <p>
         * @return {@code this}
         * @param autoReboot Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect. This parameter is required.
         */
        public Builder autoReboot(final java.lang.Boolean autoReboot) {
            this.props.autoReboot(autoReboot);
            return this;
        }
        /**
         * Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
         * <p>
         * Default: false
         * <p>
         * @return {@code this}
         * @param autoReboot Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect. This parameter is required.
         */
        public Builder autoReboot(final com.aliyun.ros.cdk.core.IResolvable autoReboot) {
            this.props.autoReboot(autoReboot);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.SSHKeyPairAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SSHKeyPairAttachment build() {
            return new com.aliyun.ros.cdk.ecs.SSHKeyPairAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
