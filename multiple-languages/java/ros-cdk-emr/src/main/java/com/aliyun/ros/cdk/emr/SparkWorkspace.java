package com.aliyun.ros.cdk.emr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EMR::SparkWorkspace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:59:08.352Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.SparkWorkspace")
public class SparkWorkspace extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.emr.ISparkWorkspace {

    protected SparkWorkspace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SparkWorkspace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SparkWorkspace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.SparkWorkspaceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SparkWorkspace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.SparkWorkspaceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Storage: The OSS storage path of the workspace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.SparkWorkspaceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.SparkWorkspaceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.SparkWorkspace}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.SparkWorkspace> {
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
        private final com.aliyun.ros.cdk.emr.SparkWorkspaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.SparkWorkspaceProps.Builder();
        }

        /**
         * Property ossBucket: The OSS bucket path of the workspace.
         * <p>
         * The path must start with oss://<bucket-name>/.
         * <p>
         * @return {@code this}
         * @param ossBucket Property ossBucket: The OSS bucket path of the workspace. This parameter is required.
         */
        public Builder ossBucket(final java.lang.String ossBucket) {
            this.props.ossBucket(ossBucket);
            return this;
        }
        /**
         * Property ossBucket: The OSS bucket path of the workspace.
         * <p>
         * The path must start with oss://<bucket-name>/.
         * <p>
         * @return {@code this}
         * @param ossBucket Property ossBucket: The OSS bucket path of the workspace. This parameter is required.
         */
        public Builder ossBucket(final com.aliyun.ros.cdk.core.IResolvable ossBucket) {
            this.props.ossBucket(ossBucket);
            return this;
        }

        /**
         * Property paymentType: The billing method of the workspace.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the workspace. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The billing method of the workspace.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the workspace. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property ramRoleName: The RAM role used to run Spark jobs.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The RAM role used to run Spark jobs. This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * Property ramRoleName: The RAM role used to run Spark jobs.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The RAM role used to run Spark jobs. This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * Property resourceSpec: The resource specifications of the workspace.
         * <p>
         * @return {@code this}
         * @param resourceSpec Property resourceSpec: The resource specifications of the workspace. This parameter is required.
         */
        public Builder resourceSpec(final com.aliyun.ros.cdk.core.IResolvable resourceSpec) {
            this.props.resourceSpec(resourceSpec);
            return this;
        }
        /**
         * Property resourceSpec: The resource specifications of the workspace.
         * <p>
         * @return {@code this}
         * @param resourceSpec Property resourceSpec: The resource specifications of the workspace. This parameter is required.
         */
        public Builder resourceSpec(final com.aliyun.ros.cdk.emr.RosSparkWorkspace.ResourceSpecProperty resourceSpec) {
            this.props.resourceSpec(resourceSpec);
            return this;
        }

        /**
         * Property workspaceName: The workspace name.
         * <p>
         * The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param workspaceName Property workspaceName: The workspace name. This parameter is required.
         */
        public Builder workspaceName(final java.lang.String workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }
        /**
         * Property workspaceName: The workspace name.
         * <p>
         * The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param workspaceName Property workspaceName: The workspace name. This parameter is required.
         */
        public Builder workspaceName(final com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }

        /**
         * Property autoRenew: Whether to enable automatic renewal for a subscription.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal for a subscription. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to enable automatic renewal for a subscription.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal for a subscription. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: The automatic renewal duration.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The automatic renewal duration. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.String autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The automatic renewal duration.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The automatic renewal duration. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property autoRenewPeriodUnit: The unit of the automatic renewal duration.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriodUnit Property autoRenewPeriodUnit: The unit of the automatic renewal duration. This parameter is required.
         */
        public Builder autoRenewPeriodUnit(final java.lang.String autoRenewPeriodUnit) {
            this.props.autoRenewPeriodUnit(autoRenewPeriodUnit);
            return this;
        }
        /**
         * Property autoRenewPeriodUnit: The unit of the automatic renewal duration.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriodUnit Property autoRenewPeriodUnit: The unit of the automatic renewal duration. This parameter is required.
         */
        public Builder autoRenewPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriodUnit) {
            this.props.autoRenewPeriodUnit(autoRenewPeriodUnit);
            return this;
        }

        /**
         * Property autoStartSessionCluster: Whether to automatically start a session cluster.
         * <p>
         * @return {@code this}
         * @param autoStartSessionCluster Property autoStartSessionCluster: Whether to automatically start a session cluster. This parameter is required.
         */
        public Builder autoStartSessionCluster(final java.lang.Boolean autoStartSessionCluster) {
            this.props.autoStartSessionCluster(autoStartSessionCluster);
            return this;
        }
        /**
         * Property autoStartSessionCluster: Whether to automatically start a session cluster.
         * <p>
         * @return {@code this}
         * @param autoStartSessionCluster Property autoStartSessionCluster: Whether to automatically start a session cluster. This parameter is required.
         */
        public Builder autoStartSessionCluster(final com.aliyun.ros.cdk.core.IResolvable autoStartSessionCluster) {
            this.props.autoStartSessionCluster(autoStartSessionCluster);
            return this;
        }

        /**
         * Property dlfCatalogId: The ID of the DLF catalog.
         * <p>
         * @return {@code this}
         * @param dlfCatalogId Property dlfCatalogId: The ID of the DLF catalog. This parameter is required.
         */
        public Builder dlfCatalogId(final java.lang.String dlfCatalogId) {
            this.props.dlfCatalogId(dlfCatalogId);
            return this;
        }
        /**
         * Property dlfCatalogId: The ID of the DLF catalog.
         * <p>
         * @return {@code this}
         * @param dlfCatalogId Property dlfCatalogId: The ID of the DLF catalog. This parameter is required.
         */
        public Builder dlfCatalogId(final com.aliyun.ros.cdk.core.IResolvable dlfCatalogId) {
            this.props.dlfCatalogId(dlfCatalogId);
            return this;
        }

        /**
         * Property dlfType: The DLF type bound to the workspace.
         * <p>
         * @return {@code this}
         * @param dlfType Property dlfType: The DLF type bound to the workspace. This parameter is required.
         */
        public Builder dlfType(final java.lang.String dlfType) {
            this.props.dlfType(dlfType);
            return this;
        }
        /**
         * Property dlfType: The DLF type bound to the workspace.
         * <p>
         * @return {@code this}
         * @param dlfType Property dlfType: The DLF type bound to the workspace. This parameter is required.
         */
        public Builder dlfType(final com.aliyun.ros.cdk.core.IResolvable dlfType) {
            this.props.dlfType(dlfType);
            return this;
        }

        /**
         * Property duration: The subscription duration.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The subscription duration. This parameter is required.
         */
        public Builder duration(final java.lang.String duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The subscription duration.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The subscription duration. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property gpuSpec: The GPU instance types of the workspace.
         * <p>
         * @return {@code this}
         * @param gpuSpec Property gpuSpec: The GPU instance types of the workspace. This parameter is required.
         */
        public Builder gpuSpec(final com.aliyun.ros.cdk.core.IResolvable gpuSpec) {
            this.props.gpuSpec(gpuSpec);
            return this;
        }
        /**
         * Property gpuSpec: The GPU instance types of the workspace.
         * <p>
         * @return {@code this}
         * @param gpuSpec Property gpuSpec: The GPU instance types of the workspace. This parameter is required.
         */
        public Builder gpuSpec(final java.util.List<? extends java.lang.Object> gpuSpec) {
            this.props.gpuSpec(gpuSpec);
            return this;
        }

        /**
         * Property gpuSubscription: The GPU subscription configuration.
         * <p>
         * This configuration is applied after the workspace is created.
         * <p>
         * @return {@code this}
         * @param gpuSubscription Property gpuSubscription: The GPU subscription configuration. This parameter is required.
         */
        public Builder gpuSubscription(final com.aliyun.ros.cdk.core.IResolvable gpuSubscription) {
            this.props.gpuSubscription(gpuSubscription);
            return this;
        }
        /**
         * Property gpuSubscription: The GPU subscription configuration.
         * <p>
         * This configuration is applied after the workspace is created.
         * <p>
         * @return {@code this}
         * @param gpuSubscription Property gpuSubscription: The GPU subscription configuration. This parameter is required.
         */
        public Builder gpuSubscription(final com.aliyun.ros.cdk.emr.RosSparkWorkspace.GpuSubscriptionProperty gpuSubscription) {
            this.props.gpuSubscription(gpuSubscription);
            return this;
        }

        /**
         * Property ipWhiteList: The IP whitelist of the workspace.
         * <p>
         * This configuration is applied after the workspace is created.
         * <p>
         * @return {@code this}
         * @param ipWhiteList Property ipWhiteList: The IP whitelist of the workspace. This parameter is required.
         */
        public Builder ipWhiteList(final com.aliyun.ros.cdk.core.IResolvable ipWhiteList) {
            this.props.ipWhiteList(ipWhiteList);
            return this;
        }
        /**
         * Property ipWhiteList: The IP whitelist of the workspace.
         * <p>
         * This configuration is applied after the workspace is created.
         * <p>
         * @return {@code this}
         * @param ipWhiteList Property ipWhiteList: The IP whitelist of the workspace. This parameter is required.
         */
        public Builder ipWhiteList(final java.util.List<? extends java.lang.Object> ipWhiteList) {
            this.props.ipWhiteList(ipWhiteList);
            return this;
        }

        /**
         * Property paymentDurationUnit: The unit of the subscription duration.
         * <p>
         * @return {@code this}
         * @param paymentDurationUnit Property paymentDurationUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder paymentDurationUnit(final java.lang.String paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }
        /**
         * Property paymentDurationUnit: The unit of the subscription duration.
         * <p>
         * @return {@code this}
         * @param paymentDurationUnit Property paymentDurationUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder paymentDurationUnit(final com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }

        /**
         * Property releaseType: The release type of the workspace.
         * <p>
         * @return {@code this}
         * @param releaseType Property releaseType: The release type of the workspace. This parameter is required.
         */
        public Builder releaseType(final java.lang.String releaseType) {
            this.props.releaseType(releaseType);
            return this;
        }
        /**
         * Property releaseType: The release type of the workspace.
         * <p>
         * @return {@code this}
         * @param releaseType Property releaseType: The release type of the workspace. This parameter is required.
         */
        public Builder releaseType(final com.aliyun.ros.cdk.core.IResolvable releaseType) {
            this.props.releaseType(releaseType);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace.
         * <p>
         * This configuration is applied after the workspace is created.
         * <p>
         * @return {@code this}
         * @param subscription Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace. This parameter is required.
         */
        public Builder subscription(final com.aliyun.ros.cdk.core.IResolvable subscription) {
            this.props.subscription(subscription);
            return this;
        }
        /**
         * Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace.
         * <p>
         * This configuration is applied after the workspace is created.
         * <p>
         * @return {@code this}
         * @param subscription Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace. This parameter is required.
         */
        public Builder subscription(final com.aliyun.ros.cdk.emr.RosSparkWorkspace.SubscriptionProperty subscription) {
            this.props.subscription(subscription);
            return this;
        }

        /**
         * Property tags: Tags to attach to workspace.
         * <p>
         * Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to workspace. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.SparkWorkspace}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.SparkWorkspace build() {
            return new com.aliyun.ros.cdk.emr.SparkWorkspace(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
