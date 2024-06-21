package com.aliyun.ros.cdk.vs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VS::Group</code>, which is used to create a group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.980Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vs.$Module.class, fqn = "@alicloud/ros-cdk-vs.RosGroup")
public class RosGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vs.RosGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vs.RosGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGbId() {
        return software.amazon.jsii.Kernel.get(this, "attrGbId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGbIp() {
        return software.amazon.jsii.Kernel.get(this, "attrGbIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGbPort() {
        return software.amazon.jsii.Kernel.get(this, "attrGbPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInProtocol() {
        return software.amazon.jsii.Kernel.get(this, "inProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "inProtocol", java.util.Objects.requireNonNull(value, "inProtocol is required"));
    }

    /**
     */
    public void setInProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "inProtocol", java.util.Objects.requireNonNull(value, "inProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOutProtocol() {
        return software.amazon.jsii.Kernel.get(this, "outProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOutProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outProtocol", java.util.Objects.requireNonNull(value, "outProtocol is required"));
    }

    /**
     */
    public void setOutProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "outProtocol", java.util.Objects.requireNonNull(value, "outProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPlayDomain() {
        return software.amazon.jsii.Kernel.get(this, "playDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPlayDomain(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "playDomain", java.util.Objects.requireNonNull(value, "playDomain is required"));
    }

    /**
     */
    public void setPlayDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "playDomain", java.util.Objects.requireNonNull(value, "playDomain is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPushDomain() {
        return software.amazon.jsii.Kernel.get(this, "pushDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPushDomain(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pushDomain", java.util.Objects.requireNonNull(value, "pushDomain is required"));
    }

    /**
     */
    public void setPushDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pushDomain", java.util.Objects.requireNonNull(value, "pushDomain is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRegion() {
        return software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "region", java.util.Objects.requireNonNull(value, "region is required"));
    }

    /**
     */
    public void setRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "region", java.util.Objects.requireNonNull(value, "region is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApp() {
        return software.amazon.jsii.Kernel.get(this, "app", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "app", value);
    }

    /**
     */
    public void setApp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "app", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCallback() {
        return software.amazon.jsii.Kernel.get(this, "callback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallback(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "callback", value);
    }

    /**
     */
    public void setCallback(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callback", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enabled", value);
    }

    /**
     */
    public void setEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLazyPull() {
        return software.amazon.jsii.Kernel.get(this, "lazyPull", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLazyPull(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "lazyPull", value);
    }

    /**
     */
    public void setLazyPull(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lazyPull", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vs.RosGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vs.RosGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vs.RosGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vs.RosGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param inProtocol This parameter is required.
         */
        public Builder inProtocol(final java.lang.String inProtocol) {
            this.props.inProtocol(inProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param inProtocol This parameter is required.
         */
        public Builder inProtocol(final com.aliyun.ros.cdk.core.IResolvable inProtocol) {
            this.props.inProtocol(inProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param outProtocol This parameter is required.
         */
        public Builder outProtocol(final java.lang.String outProtocol) {
            this.props.outProtocol(outProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param outProtocol This parameter is required.
         */
        public Builder outProtocol(final com.aliyun.ros.cdk.core.IResolvable outProtocol) {
            this.props.outProtocol(outProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param playDomain This parameter is required.
         */
        public Builder playDomain(final java.lang.String playDomain) {
            this.props.playDomain(playDomain);
            return this;
        }
        /**
         * @return {@code this}
         * @param playDomain This parameter is required.
         */
        public Builder playDomain(final com.aliyun.ros.cdk.core.IResolvable playDomain) {
            this.props.playDomain(playDomain);
            return this;
        }

        /**
         * @return {@code this}
         * @param pushDomain This parameter is required.
         */
        public Builder pushDomain(final java.lang.String pushDomain) {
            this.props.pushDomain(pushDomain);
            return this;
        }
        /**
         * @return {@code this}
         * @param pushDomain This parameter is required.
         */
        public Builder pushDomain(final com.aliyun.ros.cdk.core.IResolvable pushDomain) {
            this.props.pushDomain(pushDomain);
            return this;
        }

        /**
         * @return {@code this}
         * @param region This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * @return {@code this}
         * @param region This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * @return {@code this}
         * @param app This parameter is required.
         */
        public Builder app(final java.lang.String app) {
            this.props.app(app);
            return this;
        }
        /**
         * @return {@code this}
         * @param app This parameter is required.
         */
        public Builder app(final com.aliyun.ros.cdk.core.IResolvable app) {
            this.props.app(app);
            return this;
        }

        /**
         * @return {@code this}
         * @param callback This parameter is required.
         */
        public Builder callback(final java.lang.String callback) {
            this.props.callback(callback);
            return this;
        }
        /**
         * @return {@code this}
         * @param callback This parameter is required.
         */
        public Builder callback(final com.aliyun.ros.cdk.core.IResolvable callback) {
            this.props.callback(callback);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param enabled This parameter is required.
         */
        public Builder enabled(final java.lang.Boolean enabled) {
            this.props.enabled(enabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param enabled This parameter is required.
         */
        public Builder enabled(final com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.props.enabled(enabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param lazyPull This parameter is required.
         */
        public Builder lazyPull(final java.lang.Boolean lazyPull) {
            this.props.lazyPull(lazyPull);
            return this;
        }
        /**
         * @return {@code this}
         * @param lazyPull This parameter is required.
         */
        public Builder lazyPull(final com.aliyun.ros.cdk.core.IResolvable lazyPull) {
            this.props.lazyPull(lazyPull);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vs.RosGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.vs.RosGroup build() {
            return new com.aliyun.ros.cdk.vs.RosGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
