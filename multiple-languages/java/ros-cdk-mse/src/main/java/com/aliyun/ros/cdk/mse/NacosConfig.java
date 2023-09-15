package com.aliyun.ros.cdk.mse;

/**
 * A ROS resource type:  <code>ALIYUN::MSE::NacosConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.375Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.NacosConfig")
public class NacosConfig extends com.aliyun.ros.cdk.core.Resource {

    protected NacosConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NacosConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::MSE::NacosConfig</code>.
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
    public NacosConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.NacosConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::MSE::NacosConfig</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public NacosConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.NacosConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.NacosConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.NacosConfig> {
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
        private final com.aliyun.ros.cdk.mse.NacosConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.NacosConfigProps.Builder();
        }

        /**
         * Property dataId: The data ID.
         * <p>
         * @return {@code this}
         * @param dataId Property dataId: The data ID. This parameter is required.
         */
        public Builder dataId(final java.lang.String dataId) {
            this.props.dataId(dataId);
            return this;
        }
        /**
         * Property dataId: The data ID.
         * <p>
         * @return {@code this}
         * @param dataId Property dataId: The data ID. This parameter is required.
         */
        public Builder dataId(final com.aliyun.ros.cdk.core.IResolvable dataId) {
            this.props.dataId(dataId);
            return this;
        }

        /**
         * Property group: The ID of the group.
         * <p>
         * @return {@code this}
         * @param group Property group: The ID of the group. This parameter is required.
         */
        public Builder group(final java.lang.String group) {
            this.props.group(group);
            return this;
        }
        /**
         * Property group: The ID of the group.
         * <p>
         * @return {@code this}
         * @param group Property group: The ID of the group. This parameter is required.
         */
        public Builder group(final com.aliyun.ros.cdk.core.IResolvable group) {
            this.props.group(group);
            return this;
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property appName: The name of the application.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the application. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: The name of the application.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the application. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
         * <p>
         * @return {@code this}
         * @param betaIps Property betaIps: The list of IP addresses where the beta release of the configuration is performed. This parameter is required.
         */
        public Builder betaIps(final java.lang.String betaIps) {
            this.props.betaIps(betaIps);
            return this;
        }
        /**
         * Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
         * <p>
         * @return {@code this}
         * @param betaIps Property betaIps: The list of IP addresses where the beta release of the configuration is performed. This parameter is required.
         */
        public Builder betaIps(final com.aliyun.ros.cdk.core.IResolvable betaIps) {
            this.props.betaIps(betaIps);
            return this;
        }

        /**
         * Property content: The content of the configuration.
         * <p>
         * @return {@code this}
         * @param content Property content: The content of the configuration. This parameter is required.
         */
        public Builder content(final java.lang.String content) {
            this.props.content(content);
            return this;
        }
        /**
         * Property content: The content of the configuration.
         * <p>
         * @return {@code this}
         * @param content Property content: The content of the configuration. This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }

        /**
         * Property desc: The description of the configuration.
         * <p>
         * @return {@code this}
         * @param desc Property desc: The description of the configuration. This parameter is required.
         */
        public Builder desc(final java.lang.String desc) {
            this.props.desc(desc);
            return this;
        }
        /**
         * Property desc: The description of the configuration.
         * <p>
         * @return {@code this}
         * @param desc Property desc: The description of the configuration. This parameter is required.
         */
        public Builder desc(final com.aliyun.ros.cdk.core.IResolvable desc) {
            this.props.desc(desc);
            return this;
        }

        /**
         * Property namespaceId: The ID of the namespace.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of the namespace. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: The ID of the namespace.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of the namespace. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * Property tags: The tag of the configuration.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tag of the configuration. This parameter is required.
         */
        public Builder tags(final java.lang.String tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property type: The format of the configuration.
         * <p>
         * Supported formats include TEXT, JSON, and XML.
         * <p>
         * @return {@code this}
         * @param type Property type: The format of the configuration. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The format of the configuration.
         * <p>
         * Supported formats include TEXT, JSON, and XML.
         * <p>
         * @return {@code this}
         * @param type Property type: The format of the configuration. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.NacosConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.NacosConfig build() {
            return new com.aliyun.ros.cdk.mse.NacosConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
