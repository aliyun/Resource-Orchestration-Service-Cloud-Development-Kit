package com.aliyun.ros.cdk.pai.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::PAI::Service</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.856Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.Service")
public class Service extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.datasource.IService {

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
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.ServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.ServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessToken: The request token of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessToken() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallerUid() {
        return software.amazon.jsii.Kernel.get(this, "attrCallerUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Cpu: The CPU that you applied for each instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the service was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CurrentVersion: The current version of the model.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExtraData: The additional information about the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraData() {
        return software.amazon.jsii.Kernel.get(this, "attrExtraData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Gpu: The GPU that you applied for each instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpu() {
        return software.amazon.jsii.Kernel.get(this, "attrGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Image: The data image of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
        return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetEndpoint: The public endpoint of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IntranetEndpoint: The private endpoint of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Labels: The tags of the service.
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
     * Attribute Memory: The memory that you applied for each instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
        return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Message: The summary of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Namespace: The namespace of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
        return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PendingInstance: The number of instances for the suspended service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPendingInstance() {
        return software.amazon.jsii.Kernel.get(this, "attrPendingInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Reason: The reason why the service is in the current state.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
        return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Resource: The resource group to which the service belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResource() {
        return software.amazon.jsii.Kernel.get(this, "attrResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceAlias() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Role: The role of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
        return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RoleAttrs: The additional attributes of the service role.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleAttrs() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleAttrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RunningInstance: The number of instances for the running service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningInstance() {
        return software.amazon.jsii.Kernel.get(this, "attrRunningInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SafetyLock: The security lock of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSafetyLock() {
        return software.amazon.jsii.Kernel.get(this, "attrSafetyLock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceConfig: The configurations of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceGroup: The group to which the service belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceGroup() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceName: The name of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceUid: The ID of the service.
     * <p>
     * The value of this property is the same as the value of ServiceId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceUid() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TotalInstance: The total number of instances of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalInstance() {
        return software.amazon.jsii.Kernel.get(this, "attrTotalInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: The time when the service was updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Weight: The weight of the canary release for the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWeight() {
        return software.amazon.jsii.Kernel.get(this, "attrWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.ServiceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.datasource.ServiceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.datasource.Service}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.datasource.Service> {
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
        private final com.aliyun.ros.cdk.pai.datasource.ServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.datasource.ServiceProps.Builder();
        }

        /**
         * Property serviceName: The name of the service.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: The name of the service. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: The name of the service.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: The name of the service. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.datasource.Service}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.datasource.Service build() {
            return new com.aliyun.ros.cdk.pai.datasource.Service(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
