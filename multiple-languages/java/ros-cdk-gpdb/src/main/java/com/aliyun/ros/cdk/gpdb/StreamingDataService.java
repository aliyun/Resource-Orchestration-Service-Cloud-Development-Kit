package com.aliyun.ros.cdk.gpdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GPDB::StreamingDataService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:13:37.817Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.StreamingDataService")
public class StreamingDataService extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.gpdb.IStreamingDataService {

    protected StreamingDataService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StreamingDataService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public StreamingDataService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public StreamingDataService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: Create time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifyTime: Modify time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceDescription: The description of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceId: Service ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceIp: Service VIP.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIp() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceManaged: Service used by Cloud products, ture is used.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceName: Service Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceOwnerId: Service id of Cloud products.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServicePort: Service vPort.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort() {
        return software.amazon.jsii.Kernel.get(this, "attrServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceSpec: Resource Specifications.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.gpdb.StreamingDataService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gpdb.StreamingDataService> {
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
        private final com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps.Builder();
        }

        /**
         * Property dbInstanceId: The ID of the associated instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the associated instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the associated instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the associated instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property serviceName: Service Name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service Name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Service Name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service Name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property serviceSpec: Resource Specifications.
         * <p>
         * @return {@code this}
         * @param serviceSpec Property serviceSpec: Resource Specifications. This parameter is required.
         */
        public Builder serviceSpec(final java.lang.Number serviceSpec) {
            this.props.serviceSpec(serviceSpec);
            return this;
        }
        /**
         * Property serviceSpec: Resource Specifications.
         * <p>
         * @return {@code this}
         * @param serviceSpec Property serviceSpec: Resource Specifications. This parameter is required.
         */
        public Builder serviceSpec(final com.aliyun.ros.cdk.core.IResolvable serviceSpec) {
            this.props.serviceSpec(serviceSpec);
            return this;
        }

        /**
         * Property serviceDescription: The description of the service.
         * <p>
         * @return {@code this}
         * @param serviceDescription Property serviceDescription: The description of the service. This parameter is required.
         */
        public Builder serviceDescription(final java.lang.String serviceDescription) {
            this.props.serviceDescription(serviceDescription);
            return this;
        }
        /**
         * Property serviceDescription: The description of the service.
         * <p>
         * @return {@code this}
         * @param serviceDescription Property serviceDescription: The description of the service. This parameter is required.
         */
        public Builder serviceDescription(final com.aliyun.ros.cdk.core.IResolvable serviceDescription) {
            this.props.serviceDescription(serviceDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gpdb.StreamingDataService}.
         */
        @Override
        public com.aliyun.ros.cdk.gpdb.StreamingDataService build() {
            return new com.aliyun.ros.cdk.gpdb.StreamingDataService(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
