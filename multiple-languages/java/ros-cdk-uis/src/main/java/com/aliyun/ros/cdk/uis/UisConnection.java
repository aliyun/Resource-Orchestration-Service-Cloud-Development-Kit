package com.aliyun.ros.cdk.uis;

/**
 * A ROS resource type:  `ALIYUN::UIS::UisConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.629Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.UisConnection")
public class UisConnection extends com.aliyun.ros.cdk.core.Resource {

    protected UisConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UisConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::UIS::UisConnection`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public UisConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.uis.UisConnectionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::UIS::UisConnection`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public UisConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.uis.UisConnectionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUisConnectionId() {
        return software.amazon.jsii.Kernel.get(this, "attrUisConnectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.uis.UisConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.uis.UisConnection> {
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
        private final com.aliyun.ros.cdk.uis.UisConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.uis.UisConnectionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param uisNodeId This parameter is required.
         */
        public Builder uisNodeId(final java.lang.String uisNodeId) {
            this.props.uisNodeId(uisNodeId);
            return this;
        }

        /**
         * @return {@code this}
         * @param uisProtocol This parameter is required.
         */
        public Builder uisProtocol(final java.lang.String uisProtocol) {
            this.props.uisProtocol(uisProtocol);
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
         * @param greConfig This parameter is required.
         */
        public Builder greConfig(final com.aliyun.ros.cdk.core.IResolvable greConfig) {
            this.props.greConfig(greConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param greConfig This parameter is required.
         */
        public Builder greConfig(final java.util.List<? extends java.lang.Object> greConfig) {
            this.props.greConfig(greConfig);
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
         * @param sslConfig This parameter is required.
         */
        public Builder sslConfig(final com.aliyun.ros.cdk.core.IResolvable sslConfig) {
            this.props.sslConfig(sslConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param sslConfig This parameter is required.
         */
        public Builder sslConfig(final com.aliyun.ros.cdk.uis.RosUisConnection.SslConfigProperty sslConfig) {
            this.props.sslConfig(sslConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.uis.UisConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.uis.UisConnection build() {
            return new com.aliyun.ros.cdk.uis.UisConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
