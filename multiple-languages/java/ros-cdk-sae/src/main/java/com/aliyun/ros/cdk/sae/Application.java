package com.aliyun.ros.cdk.sae;

/**
 * A ROS resource type:  `ALIYUN::SAE::Application`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.534Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.Application")
public class Application extends com.aliyun.ros.cdk.core.Resource {

    protected Application(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Application(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAE::Application`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAE::Application`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.Application}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.Application> {
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
        private final com.aliyun.ros.cdk.sae.ApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.ApplicationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespaceId This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicas This parameter is required.
         */
        public Builder replicas(final java.lang.Number replicas) {
            this.props.replicas(replicas);
            return this;
        }

        /**
         * @return {@code this}
         * @param appDescription This parameter is required.
         */
        public Builder appDescription(final java.lang.String appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param command This parameter is required.
         */
        public Builder command(final java.lang.String command) {
            this.props.command(command);
            return this;
        }

        /**
         * @return {@code this}
         * @param commandArgs This parameter is required.
         */
        public Builder commandArgs(final java.lang.String commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param customHostAlias This parameter is required.
         */
        public Builder customHostAlias(final java.lang.String customHostAlias) {
            this.props.customHostAlias(customHostAlias);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploy This parameter is required.
         */
        public Builder deploy(final java.lang.Boolean deploy) {
            this.props.deploy(deploy);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploy This parameter is required.
         */
        public Builder deploy(final com.aliyun.ros.cdk.core.IResolvable deploy) {
            this.props.deploy(deploy);
            return this;
        }

        /**
         * @return {@code this}
         * @param edasContainerVersion This parameter is required.
         */
        public Builder edasContainerVersion(final java.lang.String edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param envs This parameter is required.
         */
        public Builder envs(final java.lang.String envs) {
            this.props.envs(envs);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageUrl This parameter is required.
         */
        public Builder imageUrl(final java.lang.String imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param jarStartArgs This parameter is required.
         */
        public Builder jarStartArgs(final java.lang.String jarStartArgs) {
            this.props.jarStartArgs(jarStartArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param jarStartOptions This parameter is required.
         */
        public Builder jarStartOptions(final java.lang.String jarStartOptions) {
            this.props.jarStartOptions(jarStartOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param jdk This parameter is required.
         */
        public Builder jdk(final java.lang.String jdk) {
            this.props.jdk(jdk);
            return this;
        }

        /**
         * @return {@code this}
         * @param liveness This parameter is required.
         */
        public Builder liveness(final java.lang.String liveness) {
            this.props.liveness(liveness);
            return this;
        }

        /**
         * @return {@code this}
         * @param mountDesc This parameter is required.
         */
        public Builder mountDesc(final java.lang.String mountDesc) {
            this.props.mountDesc(mountDesc);
            return this;
        }

        /**
         * @return {@code this}
         * @param mountHost This parameter is required.
         */
        public Builder mountHost(final java.lang.String mountHost) {
            this.props.mountHost(mountHost);
            return this;
        }

        /**
         * @return {@code this}
         * @param nasId This parameter is required.
         */
        public Builder nasId(final java.lang.String nasId) {
            this.props.nasId(nasId);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageUrl This parameter is required.
         */
        public Builder packageUrl(final java.lang.String packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageVersion This parameter is required.
         */
        public Builder packageVersion(final java.lang.String packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param postStart This parameter is required.
         */
        public Builder postStart(final java.lang.String postStart) {
            this.props.postStart(postStart);
            return this;
        }

        /**
         * @return {@code this}
         * @param preStop This parameter is required.
         */
        public Builder preStop(final java.lang.String preStop) {
            this.props.preStop(preStop);
            return this;
        }

        /**
         * @return {@code this}
         * @param readiness This parameter is required.
         */
        public Builder readiness(final java.lang.String readiness) {
            this.props.readiness(readiness);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsConfigs This parameter is required.
         */
        public Builder slsConfigs(final java.lang.String slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param timezone This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.props.timezone(timezone);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param warStartOptions This parameter is required.
         */
        public Builder warStartOptions(final java.lang.String warStartOptions) {
            this.props.warStartOptions(warStartOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param webContainer This parameter is required.
         */
        public Builder webContainer(final java.lang.String webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sae.Application}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.Application build() {
            return new com.aliyun.ros.cdk.sae.Application(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
