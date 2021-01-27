package com.aliyun.ros.cdk.vs;

/**
 * A ROS resource type:  `ALIYUN::VS::Group`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.714Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vs.$Module.class, fqn = "@alicloud/ros-cdk-vs.Group")
public class Group extends com.aliyun.ros.cdk.core.Resource {

    protected Group(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Group(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VS::Group`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vs.GroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VS::Group`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vs.GroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGbId() {
        return software.amazon.jsii.Kernel.get(this, "attrGbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGbIp() {
        return software.amazon.jsii.Kernel.get(this, "attrGbIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGbPort() {
        return software.amazon.jsii.Kernel.get(this, "attrGbPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vs.Group}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vs.Group> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vs.GroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vs.GroupProps.Builder();
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
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
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
         * @param playDomain This parameter is required.
         */
        public Builder playDomain(final java.lang.String playDomain) {
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
         * @param region This parameter is required.
         */
        public Builder region(final java.lang.String region) {
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
         * @param callback This parameter is required.
         */
        public Builder callback(final java.lang.String callback) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vs.Group}.
         */
        @Override
        public com.aliyun.ros.cdk.vs.Group build() {
            return new com.aliyun.ros.cdk.vs.Group(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
