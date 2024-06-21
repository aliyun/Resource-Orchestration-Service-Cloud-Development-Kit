package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::JoinSecurityGroup</code>, which is used to add one or more ECS instances to a specified security group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:09.162Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.JoinSecurityGroup")
public class JoinSecurityGroup extends com.aliyun.ros.cdk.core.Resource {

    protected JoinSecurityGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected JoinSecurityGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public JoinSecurityGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public JoinSecurityGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.JoinSecurityGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.JoinSecurityGroup> {
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
        private final com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.JoinSecurityGroupProps.Builder();
        }

        /**
         * Property securityGroupId: Security group id to join.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group id to join. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group id to join.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group id to join. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property instanceId: Instance Id to the join the security group.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance Id to the join the security group. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance Id to the join the security group.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance Id to the join the security group. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceIdList Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored. This parameter is required.
         */
        public Builder instanceIdList(final java.util.List<? extends java.lang.Object> instanceIdList) {
            this.props.instanceIdList(instanceIdList);
            return this;
        }
        /**
         * Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceIdList Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored. This parameter is required.
         */
        public Builder instanceIdList(final com.aliyun.ros.cdk.core.IResolvable instanceIdList) {
            this.props.instanceIdList(instanceIdList);
            return this;
        }

        /**
         * Property networkInterfaceList: Network interface list.
         * <p>
         * @return {@code this}
         * @param networkInterfaceList Property networkInterfaceList: Network interface list. This parameter is required.
         */
        public Builder networkInterfaceList(final java.util.List<? extends java.lang.Object> networkInterfaceList) {
            this.props.networkInterfaceList(networkInterfaceList);
            return this;
        }
        /**
         * Property networkInterfaceList: Network interface list.
         * <p>
         * @return {@code this}
         * @param networkInterfaceList Property networkInterfaceList: Network interface list. This parameter is required.
         */
        public Builder networkInterfaceList(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceList) {
            this.props.networkInterfaceList(networkInterfaceList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.JoinSecurityGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.JoinSecurityGroup build() {
            return new com.aliyun.ros.cdk.ecs.JoinSecurityGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
