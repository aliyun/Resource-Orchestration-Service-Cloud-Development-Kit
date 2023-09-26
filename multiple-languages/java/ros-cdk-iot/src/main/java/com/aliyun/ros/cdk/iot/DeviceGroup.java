package com.aliyun.ros.cdk.iot;

/**
 * A ROS resource type:  <code>ALIYUN::IOT::DeviceGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.469Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.DeviceGroup")
public class DeviceGroup extends com.aliyun.ros.cdk.core.Resource {

    protected DeviceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DeviceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::IOT::DeviceGroup</code>.
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
    public DeviceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::IOT::DeviceGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DeviceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.DeviceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.DeviceGroup> {
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
        private final com.aliyun.ros.cdk.iot.DeviceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.DeviceGroupProps.Builder();
        }

        /**
         * Property groupName: The name of the group.
         * <p>
         * The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the group. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The name of the group.
         * <p>
         * The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the group. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property groupDesc: The description of the group.
         * <p>
         * You can enter a description with up to 100 characters.
         * <p>
         * @return {@code this}
         * @param groupDesc Property groupDesc: The description of the group. This parameter is required.
         */
        public Builder groupDesc(final java.lang.String groupDesc) {
            this.props.groupDesc(groupDesc);
            return this;
        }
        /**
         * Property groupDesc: The description of the group.
         * <p>
         * You can enter a description with up to 100 characters.
         * <p>
         * @return {@code this}
         * @param groupDesc Property groupDesc: The description of the group. This parameter is required.
         */
        public Builder groupDesc(final com.aliyun.ros.cdk.core.IResolvable groupDesc) {
            this.props.groupDesc(groupDesc);
            return this;
        }

        /**
         * Property iotInstanceId: Public instance does not pass this parameter;
         * <p>
         * instance that you need to buy the incoming instance ID.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;. This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * Property iotInstanceId: Public instance does not pass this parameter;
         * <p>
         * instance that you need to buy the incoming instance ID.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;. This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * Property superGroupId: The ID of the parent group.
         * <p>
         * If you want to create a first-level group, do not enter this parameter.
         * <p>
         * @return {@code this}
         * @param superGroupId Property superGroupId: The ID of the parent group. This parameter is required.
         */
        public Builder superGroupId(final java.lang.String superGroupId) {
            this.props.superGroupId(superGroupId);
            return this;
        }
        /**
         * Property superGroupId: The ID of the parent group.
         * <p>
         * If you want to create a first-level group, do not enter this parameter.
         * <p>
         * @return {@code this}
         * @param superGroupId Property superGroupId: The ID of the parent group. This parameter is required.
         */
        public Builder superGroupId(final com.aliyun.ros.cdk.core.IResolvable superGroupId) {
            this.props.superGroupId(superGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.iot.DeviceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.DeviceGroup build() {
            return new com.aliyun.ros.cdk.iot.DeviceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
