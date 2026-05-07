package com.aliyun.ros.cdk.rocketmq5;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ROCKETMQ5::Acl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:53.684Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.Acl")
public class Acl extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.rocketmq5.IAcl {

    protected Acl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Acl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Acl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.AclProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Acl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.AclProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Actions: The type of operation authorized.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrActions() {
        return software.amazon.jsii.Kernel.get(this, "attrActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Decision: The decision result of the authorization.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDecision() {
        return software.amazon.jsii.Kernel.get(this, "attrDecision", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpWhitelists: The IP addresses in the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpWhitelists() {
        return software.amazon.jsii.Kernel.get(this, "attrIpWhitelists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceName: The name of the resource on which you want to grant permissions.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceName() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceType: The type of the resource on which you want to grant permissions.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Username: The username of the account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsername() {
        return software.amazon.jsii.Kernel.get(this, "attrUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.AclProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq5.AclProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.rocketmq5.Acl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rocketmq5.Acl> {
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
        private final com.aliyun.ros.cdk.rocketmq5.AclProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rocketmq5.AclProps.Builder();
        }

        /**
         * Property actions: The type of operation authorized.
         * <p>
         * @return {@code this}
         * @param actions Property actions: The type of operation authorized. This parameter is required.
         */
        public Builder actions(final com.aliyun.ros.cdk.core.IResolvable actions) {
            this.props.actions(actions);
            return this;
        }
        /**
         * Property actions: The type of operation authorized.
         * <p>
         * @return {@code this}
         * @param actions Property actions: The type of operation authorized. This parameter is required.
         */
        public Builder actions(final java.util.List<? extends java.lang.Object> actions) {
            this.props.actions(actions);
            return this;
        }

        /**
         * Property decision: The decision result of the authorization.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Deny: Access is denied.</li>
         * <li>Allow: Allow access.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param decision Property decision: The decision result of the authorization. This parameter is required.
         */
        public Builder decision(final java.lang.String decision) {
            this.props.decision(decision);
            return this;
        }
        /**
         * Property decision: The decision result of the authorization.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Deny: Access is denied.</li>
         * <li>Allow: Allow access.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param decision Property decision: The decision result of the authorization. This parameter is required.
         */
        public Builder decision(final com.aliyun.ros.cdk.core.IResolvable decision) {
            this.props.decision(decision);
            return this;
        }

        /**
         * Property instanceId: The ID of the RocketMQ instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the RocketMQ instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the RocketMQ instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the RocketMQ instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property resourceName: The name of the resource on which you want to grant permissions.
         * <p>
         * @return {@code this}
         * @param resourceName Property resourceName: The name of the resource on which you want to grant permissions. This parameter is required.
         */
        public Builder resourceName(final java.lang.String resourceName) {
            this.props.resourceName(resourceName);
            return this;
        }
        /**
         * Property resourceName: The name of the resource on which you want to grant permissions.
         * <p>
         * @return {@code this}
         * @param resourceName Property resourceName: The name of the resource on which you want to grant permissions. This parameter is required.
         */
        public Builder resourceName(final com.aliyun.ros.cdk.core.IResolvable resourceName) {
            this.props.resourceName(resourceName);
            return this;
        }

        /**
         * Property resourceType: The type of the resource on which you want to grant permissions.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Group: consumer Group.</li>
         * <li>Topic: Topic.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the resource on which you want to grant permissions. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The type of the resource on which you want to grant permissions.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Group: consumer Group.</li>
         * <li>Topic: Topic.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the resource on which you want to grant permissions. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * Property username: The username of the account.
         * <p>
         * @return {@code this}
         * @param username Property username: The username of the account. This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props.username(username);
            return this;
        }
        /**
         * Property username: The username of the account.
         * <p>
         * @return {@code this}
         * @param username Property username: The username of the account. This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props.username(username);
            return this;
        }

        /**
         * Property ipWhitelists: The IP addresses in the whitelist.
         * <p>
         * @return {@code this}
         * @param ipWhitelists Property ipWhitelists: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder ipWhitelists(final com.aliyun.ros.cdk.core.IResolvable ipWhitelists) {
            this.props.ipWhitelists(ipWhitelists);
            return this;
        }
        /**
         * Property ipWhitelists: The IP addresses in the whitelist.
         * <p>
         * @return {@code this}
         * @param ipWhitelists Property ipWhitelists: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder ipWhitelists(final java.util.List<? extends java.lang.Object> ipWhitelists) {
            this.props.ipWhitelists(ipWhitelists);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rocketmq5.Acl}.
         */
        @Override
        public com.aliyun.ros.cdk.rocketmq5.Acl build() {
            return new com.aliyun.ros.cdk.rocketmq5.Acl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
