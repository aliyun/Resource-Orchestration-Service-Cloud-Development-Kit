package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::Service</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.645Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.Service")
public class Service extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IService {

    protected Service(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Service(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessToken: Service Request authentication token.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid() {
        return software.amazon.jsii.Kernel.get(this, "attrCallerUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Cpu: Number of service CPU cores.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CurrentVersion: Current running version of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExtraData: Service Extra Information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData() {
        return software.amazon.jsii.Kernel.get(this, "attrExtraData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Gpu: Number of service GPU cards.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu() {
        return software.amazon.jsii.Kernel.get(this, "attrGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Image: Service Deployment Mirroring.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
        return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Labels: Service Tag.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
        return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Memory: Memory of service (MB).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
        return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Message: Latest information on services.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Namespace: The namespace to which the service belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParentUid: Primary account ID of the creator.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
        return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance() {
        return software.amazon.jsii.Kernel.get(this, "attrPendingInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Reason: Service deployment failure reason.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
        return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Resource: The ID of the resource group to which the service belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource() {
        return software.amazon.jsii.Kernel.get(this, "attrResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Role: Grouping Service Role.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
        return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RoleAttrs: Grouping Service Role Properties.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RunningInstance: Number of instances in service running.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance() {
        return software.amazon.jsii.Kernel.get(this, "attrRunningInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SafetyLock: Service Security Lock Status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock() {
        return software.amazon.jsii.Kernel.get(this, "attrSafetyLock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceConfig: Service configuration information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceGroup: Group to which the service belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceName: Service Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceUid: Unique Service ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TotalInstance: Total number of instances required by the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance() {
        return software.amazon.jsii.Kernel.get(this, "attrTotalInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: Service Last Updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Weight: Packet Service Traffic Weight.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight() {
        return software.amazon.jsii.Kernel.get(this, "attrWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ServiceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ServiceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.Service}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.Service> {
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
        private final com.aliyun.ros.cdk.pai.ServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.ServiceProps.Builder();
        }

        /**
         * Property serviceConfig: Service configuration information.
         * <p>
         * @return {@code this}
         * @param serviceConfig Property serviceConfig: Service configuration information. This parameter is required.
         */
        public Builder serviceConfig(final com.aliyun.ros.cdk.core.IResolvable serviceConfig) {
            this.props.serviceConfig(serviceConfig);
            return this;
        }
        /**
         * Property serviceConfig: Service configuration information.
         * <p>
         * @return {@code this}
         * @param serviceConfig Property serviceConfig: Service configuration information. This parameter is required.
         */
        public Builder serviceConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> serviceConfig) {
            this.props.serviceConfig(serviceConfig);
            return this;
        }

        /**
         * Property develop: Whether to enter the development mode.
         * <p>
         * @return {@code this}
         * @param develop Property develop: Whether to enter the development mode. This parameter is required.
         */
        public Builder develop(final java.lang.String develop) {
            this.props.develop(develop);
            return this;
        }
        /**
         * Property develop: Whether to enter the development mode.
         * <p>
         * @return {@code this}
         * @param develop Property develop: Whether to enter the development mode. This parameter is required.
         */
        public Builder develop(final com.aliyun.ros.cdk.core.IResolvable develop) {
            this.props.develop(develop);
            return this;
        }

        /**
         * Property labels: Service Tag.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Service Tag. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * Property labels: Service Tag.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Service Tag. This parameter is required.
         */
        public Builder labels(final java.util.Map<java.lang.String, ? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.Service}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.Service build() {
            return new com.aliyun.ros.cdk.pai.Service(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
