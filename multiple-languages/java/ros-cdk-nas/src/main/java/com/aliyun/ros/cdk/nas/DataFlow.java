package com.aliyun.ros.cdk.nas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NAS::DataFlow</code>, which is used to create a data flow between a Cloud Parallel File Storage (CPFS) file system and an Object Storage Service (OSS) bucket.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.200Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.DataFlow")
public class DataFlow extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nas.IDataFlow {

    protected DataFlow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DataFlow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DataFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.DataFlowProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DataFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.DataFlowProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DataFlowId: Data flow ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataFlowId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FileSystemId: File system ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.DataFlowProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.DataFlowProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.DataFlow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.DataFlow> {
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
        private final com.aliyun.ros.cdk.nas.DataFlowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.DataFlowProps.Builder();
        }

        /**
         * Property fileSystemId: File system ID.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         */
        public Builder fileSystemId(final java.lang.String fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }
        /**
         * Property fileSystemId: File system ID.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         */
        public Builder fileSystemId(final com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }

        /**
         * Property fsetId: Fileset ID.
         * <p>
         * @return {@code this}
         * @param fsetId Property fsetId: Fileset ID. This parameter is required.
         */
        public Builder fsetId(final java.lang.String fsetId) {
            this.props.fsetId(fsetId);
            return this;
        }
        /**
         * Property fsetId: Fileset ID.
         * <p>
         * @return {@code this}
         * @param fsetId Property fsetId: Fileset ID. This parameter is required.
         */
        public Builder fsetId(final com.aliyun.ros.cdk.core.IResolvable fsetId) {
            this.props.fsetId(fsetId);
            return this;
        }

        /**
         * Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region.
         * <p>
         * @return {@code this}
         * @param sourceStorage Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region. This parameter is required.
         */
        public Builder sourceStorage(final java.lang.String sourceStorage) {
            this.props.sourceStorage(sourceStorage);
            return this;
        }
        /**
         * Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region.
         * <p>
         * @return {@code this}
         * @param sourceStorage Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: // and https: //. Explain that the OSS BUCKET must be the bucket that exists in the region. This parameter is required.
         */
        public Builder sourceStorage(final com.aliyun.ros.cdk.core.IResolvable sourceStorage) {
            this.props.sourceStorage(sourceStorage);
            return this;
        }

        /**
         * Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500.
         * <p>
         * Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
         * <p>
         * @return {@code this}
         * @param throughput Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500. This parameter is required.
         */
        public Builder throughput(final java.lang.Number throughput) {
            this.props.throughput(throughput);
            return this;
        }
        /**
         * Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500.
         * <p>
         * Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
         * <p>
         * @return {@code this}
         * @param throughput Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s. Value:  600 1200 1500. This parameter is required.
         */
        public Builder throughput(final com.aliyun.ros.cdk.core.IResolvable throughput) {
            this.props.throughput(throughput);
            return this;
        }

        /**
         * Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.
         * <p>
         * If there is data update, start the automatic update task, unit: minute.
         * Scope of value: 5 ~ 525600, default value: 10.
         * <p>
         * @return {@code this}
         * @param autoRefreshInterval Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. This parameter is required.
         */
        public Builder autoRefreshInterval(final java.lang.Number autoRefreshInterval) {
            this.props.autoRefreshInterval(autoRefreshInterval);
            return this;
        }
        /**
         * Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.
         * <p>
         * If there is data update, start the automatic update task, unit: minute.
         * Scope of value: 5 ~ 525600, default value: 10.
         * <p>
         * @return {@code this}
         * @param autoRefreshInterval Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. This parameter is required.
         */
        public Builder autoRefreshInterval(final com.aliyun.ros.cdk.core.IResolvable autoRefreshInterval) {
            this.props.autoRefreshInterval(autoRefreshInterval);
            return this;
        }

        /**
         * Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
         * <p>
         * None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
         * Importchanged: The data update at the source automatically imports CPFS.
         * <p>
         * @return {@code this}
         * @param autoRefreshPolicy Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy. This parameter is required.
         */
        public Builder autoRefreshPolicy(final java.lang.String autoRefreshPolicy) {
            this.props.autoRefreshPolicy(autoRefreshPolicy);
            return this;
        }
        /**
         * Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
         * <p>
         * None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
         * Importchanged: The data update at the source automatically imports CPFS.
         * <p>
         * @return {@code this}
         * @param autoRefreshPolicy Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy. This parameter is required.
         */
        public Builder autoRefreshPolicy(final com.aliyun.ros.cdk.core.IResolvable autoRefreshPolicy) {
            this.props.autoRefreshPolicy(autoRefreshPolicy);
            return this;
        }

        /**
         * Property autoRefreshs:.
         * <p>
         * @return {@code this}
         * @param autoRefreshs Property autoRefreshs:. This parameter is required.
         */
        public Builder autoRefreshs(final com.aliyun.ros.cdk.core.IResolvable autoRefreshs) {
            this.props.autoRefreshs(autoRefreshs);
            return this;
        }
        /**
         * Property autoRefreshs:.
         * <p>
         * @return {@code this}
         * @param autoRefreshs Property autoRefreshs:. This parameter is required.
         */
        public Builder autoRefreshs(final java.util.List<? extends java.lang.Object> autoRefreshs) {
            this.props.autoRefreshs(autoRefreshs);
            return this;
        }

        /**
         * Property description: Description of data flow.
         * <p>
         * limit:
         * The length is 2 to 128 English or Chinese characters.
         * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
         * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * <p>
         * @return {@code this}
         * @param description Property description: Description of data flow. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of data flow.
         * <p>
         * limit:
         * The length is 2 to 128 English or Chinese characters.
         * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
         * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * <p>
         * @return {@code this}
         * @param description Property description: Description of data flow. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property sourceSecurityType: The type of safety protection types of the source storage.
         * <p>
         * If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
         * No (default value): It means that the source storage does not need to be accessed by safe protection.
         * SSL: Protective access through SSL certificates.
         * <p>
         * @return {@code this}
         * @param sourceSecurityType Property sourceSecurityType: The type of safety protection types of the source storage. This parameter is required.
         */
        public Builder sourceSecurityType(final java.lang.String sourceSecurityType) {
            this.props.sourceSecurityType(sourceSecurityType);
            return this;
        }
        /**
         * Property sourceSecurityType: The type of safety protection types of the source storage.
         * <p>
         * If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
         * No (default value): It means that the source storage does not need to be accessed by safe protection.
         * SSL: Protective access through SSL certificates.
         * <p>
         * @return {@code this}
         * @param sourceSecurityType Property sourceSecurityType: The type of safety protection types of the source storage. This parameter is required.
         */
        public Builder sourceSecurityType(final com.aliyun.ros.cdk.core.IResolvable sourceSecurityType) {
            this.props.sourceSecurityType(sourceSecurityType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.DataFlow}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.DataFlow build() {
            return new com.aliyun.ros.cdk.nas.DataFlow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
