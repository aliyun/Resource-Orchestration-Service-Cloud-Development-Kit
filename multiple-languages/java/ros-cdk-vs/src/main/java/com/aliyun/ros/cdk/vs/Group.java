package com.aliyun.ros.cdk.vs;

/**
 * A ROS resource type:  <code>ALIYUN::VS::Group</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:40.503Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vs.$Module.class, fqn = "@alicloud/ros-cdk-vs.Group")
public class Group extends com.aliyun.ros.cdk.core.Resource {

    protected Group(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Group(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VS::Group</code>.
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
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vs.GroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VS::Group</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vs.GroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GbId: GB ID space provided.
     * <p>
     * (Applies only to access the space marked States)
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGbId() {
        return software.amazon.jsii.Kernel.get(this, "attrGbId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GbIp: GB signaling server address space provided.
     * <p>
     * (Applies only to access the space marked States)
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGbIp() {
        return software.amazon.jsii.Kernel.get(this, "attrGbIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GbPort: GB Port space provided.
     * <p>
     * (Applies only to access the space marked States)
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGbPort() {
        return software.amazon.jsii.Kernel.get(this, "attrGbPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Id: Space ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vs.Group}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vs.Group> {
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
        private final com.aliyun.ros.cdk.vs.GroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vs.GroupProps.Builder();
        }

        /**
         * Property inProtocol: Access protocol used by the space.
         * <p>
         * Value: gb28181, rtmp
         * <p>
         * @return {@code this}
         * @param inProtocol Property inProtocol: Access protocol used by the space. This parameter is required.
         */
        public Builder inProtocol(final java.lang.String inProtocol) {
            this.props.inProtocol(inProtocol);
            return this;
        }
        /**
         * Property inProtocol: Access protocol used by the space.
         * <p>
         * Value: gb28181, rtmp
         * <p>
         * @return {@code this}
         * @param inProtocol Property inProtocol: Access protocol used by the space. This parameter is required.
         */
        public Builder inProtocol(final com.aliyun.ros.cdk.core.IResolvable inProtocol) {
            this.props.inProtocol(inProtocol);
            return this;
        }

        /**
         * Property name: Space name.
         * <p>
         * @return {@code this}
         * @param name Property name: Space name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Space name.
         * <p>
         * @return {@code this}
         * @param name Property name: Space name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property outProtocol: Play protocol used by the space, multivalued separated by commas.
         * <p>
         * Value: flv, hls, rtmp
         * <p>
         * @return {@code this}
         * @param outProtocol Property outProtocol: Play protocol used by the space, multivalued separated by commas. This parameter is required.
         */
        public Builder outProtocol(final java.lang.String outProtocol) {
            this.props.outProtocol(outProtocol);
            return this;
        }
        /**
         * Property outProtocol: Play protocol used by the space, multivalued separated by commas.
         * <p>
         * Value: flv, hls, rtmp
         * <p>
         * @return {@code this}
         * @param outProtocol Property outProtocol: Play protocol used by the space, multivalued separated by commas. This parameter is required.
         */
        public Builder outProtocol(final com.aliyun.ros.cdk.core.IResolvable outProtocol) {
            this.props.outProtocol(outProtocol);
            return this;
        }

        /**
         * Property playDomain: Use of the domain name space broadcast stream.
         * <p>
         * @return {@code this}
         * @param playDomain Property playDomain: Use of the domain name space broadcast stream. This parameter is required.
         */
        public Builder playDomain(final java.lang.String playDomain) {
            this.props.playDomain(playDomain);
            return this;
        }
        /**
         * Property playDomain: Use of the domain name space broadcast stream.
         * <p>
         * @return {@code this}
         * @param playDomain Property playDomain: Use of the domain name space broadcast stream. This parameter is required.
         */
        public Builder playDomain(final com.aliyun.ros.cdk.core.IResolvable playDomain) {
            this.props.playDomain(playDomain);
            return this;
        }

        /**
         * Property pushDomain: Plug flow domain name space to use.
         * <p>
         * (Only access to the space rtmp)
         * <p>
         * @return {@code this}
         * @param pushDomain Property pushDomain: Plug flow domain name space to use. This parameter is required.
         */
        public Builder pushDomain(final java.lang.String pushDomain) {
            this.props.pushDomain(pushDomain);
            return this;
        }
        /**
         * Property pushDomain: Plug flow domain name space to use.
         * <p>
         * (Only access to the space rtmp)
         * <p>
         * @return {@code this}
         * @param pushDomain Property pushDomain: Plug flow domain name space to use. This parameter is required.
         */
        public Builder pushDomain(final com.aliyun.ros.cdk.core.IResolvable pushDomain) {
            this.props.pushDomain(pushDomain);
            return this;
        }

        /**
         * Property region: Space belongs to the region, as a service center.
         * <p>
         * @return {@code this}
         * @param region Property region: Space belongs to the region, as a service center. This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * Property region: Space belongs to the region, as a service center.
         * <p>
         * @return {@code this}
         * @param region Property region: Space belongs to the region, as a service center. This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * Property app: Application name space used, the default live.
         * <p>
         * @return {@code this}
         * @param app Property app: Application name space used, the default live. This parameter is required.
         */
        public Builder app(final java.lang.String app) {
            this.props.app(app);
            return this;
        }
        /**
         * Property app: Application name space used, the default live.
         * <p>
         * @return {@code this}
         * @param app Property app: Application name space used, the default live. This parameter is required.
         */
        public Builder app(final com.aliyun.ros.cdk.core.IResolvable app) {
            this.props.app(app);
            return this;
        }

        /**
         * Property callback: Updating the space callback device / flow state.
         * <p>
         * @return {@code this}
         * @param callback Property callback: Updating the space callback device / flow state. This parameter is required.
         */
        public Builder callback(final java.lang.String callback) {
            this.props.callback(callback);
            return this;
        }
        /**
         * Property callback: Updating the space callback device / flow state.
         * <p>
         * @return {@code this}
         * @param callback Property callback: Updating the space callback device / flow state. This parameter is required.
         */
        public Builder callback(final com.aliyun.ros.cdk.core.IResolvable callback) {
            this.props.callback(callback);
            return this;
        }

        /**
         * Property description: Space description.
         * <p>
         * @return {@code this}
         * @param description Property description: Space description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Space description.
         * <p>
         * @return {@code this}
         * @param description Property description: Space description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enabled: Space is enabled.
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Space is enabled. This parameter is required.
         */
        public Builder enabled(final java.lang.Boolean enabled) {
            this.props.enabled(enabled);
            return this;
        }
        /**
         * Property enabled: Space is enabled.
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Space is enabled. This parameter is required.
         */
        public Builder enabled(final com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.props.enabled(enabled);
            return this;
        }

        /**
         * Property lazyPull: Whether to enable on-demand pull flow, default false.
         * <p>
         * @return {@code this}
         * @param lazyPull Property lazyPull: Whether to enable on-demand pull flow, default false. This parameter is required.
         */
        public Builder lazyPull(final java.lang.Boolean lazyPull) {
            this.props.lazyPull(lazyPull);
            return this;
        }
        /**
         * Property lazyPull: Whether to enable on-demand pull flow, default false.
         * <p>
         * @return {@code this}
         * @param lazyPull Property lazyPull: Whether to enable on-demand pull flow, default false. This parameter is required.
         */
        public Builder lazyPull(final com.aliyun.ros.cdk.core.IResolvable lazyPull) {
            this.props.lazyPull(lazyPull);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vs.Group}.
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
