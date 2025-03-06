package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::DatasetVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.547Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.DatasetVersion")
public class DatasetVersion extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IDatasetVersion {

    protected DatasetVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DatasetVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DatasetVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetVersionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DatasetVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetVersionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute VersionName: Dataset version name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionName() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetVersionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.DatasetVersionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.DatasetVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.DatasetVersion> {
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
        private final com.aliyun.ros.cdk.pai.DatasetVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.DatasetVersionProps.Builder();
        }

        /**
         * Property datasetId: The ID of the dataset.
         * <p>
         * @return {@code this}
         * @param datasetId Property datasetId: The ID of the dataset. This parameter is required.
         */
        public Builder datasetId(final java.lang.String datasetId) {
            this.props.datasetId(datasetId);
            return this;
        }
        /**
         * Property datasetId: The ID of the dataset.
         * <p>
         * @return {@code this}
         * @param datasetId Property datasetId: The ID of the dataset. This parameter is required.
         */
        public Builder datasetId(final com.aliyun.ros.cdk.core.IResolvable datasetId) {
            this.props.datasetId(datasetId);
            return this;
        }

        /**
         * Property dataSourceType: The data source type.
         * <p>
         * The following values are supported:
         * <p>
         * <ul>
         * <li>OSS: Alibaba Cloud Object Storage (OSS).</li>
         * <li>NAS: Alibaba cloud file storage (NAS).</li>
         * <li>CPFS</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dataSourceType Property dataSourceType: The data source type. This parameter is required.
         */
        public Builder dataSourceType(final java.lang.String dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }
        /**
         * Property dataSourceType: The data source type.
         * <p>
         * The following values are supported:
         * <p>
         * <ul>
         * <li>OSS: Alibaba Cloud Object Storage (OSS).</li>
         * <li>NAS: Alibaba cloud file storage (NAS).</li>
         * <li>CPFS</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dataSourceType Property dataSourceType: The data source type. This parameter is required.
         */
        public Builder dataSourceType(final com.aliyun.ros.cdk.core.IResolvable dataSourceType) {
            this.props.dataSourceType(dataSourceType);
            return this;
        }

        /**
         * Property property: The properties of the dataset.
         * <p>
         * The following values are supported:
         * <p>
         * <ul>
         * <li>FILE: FILE.</li>
         * <li>DIRECTORY: folder.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param property Property property: The properties of the dataset. This parameter is required.
         */
        public Builder property(final java.lang.String property) {
            this.props.property(property);
            return this;
        }
        /**
         * Property property: The properties of the dataset.
         * <p>
         * The following values are supported:
         * <p>
         * <ul>
         * <li>FILE: FILE.</li>
         * <li>DIRECTORY: folder.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param property Property property: The properties of the dataset. This parameter is required.
         */
        public Builder property(final com.aliyun.ros.cdk.core.IResolvable property) {
            this.props.property(property);
            return this;
        }

        /**
         * Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss://bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss://bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;. This parameter is required.
         */
        public Builder uri(final java.lang.String uri) {
            this.props.uri(uri);
            return this;
        }
        /**
         * Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss://bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss://bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;. This parameter is required.
         */
        public Builder uri(final com.aliyun.ros.cdk.core.IResolvable uri) {
            this.props.uri(uri);
            return this;
        }

        /**
         * Property dataCount: The number of dataset files, in units of pieces.
         * <p>
         * @return {@code this}
         * @param dataCount Property dataCount: The number of dataset files, in units of pieces. This parameter is required.
         */
        public Builder dataCount(final java.lang.Number dataCount) {
            this.props.dataCount(dataCount);
            return this;
        }
        /**
         * Property dataCount: The number of dataset files, in units of pieces.
         * <p>
         * @return {@code this}
         * @param dataCount Property dataCount: The number of dataset files, in units of pieces. This parameter is required.
         */
        public Builder dataCount(final com.aliyun.ros.cdk.core.IResolvable dataCount) {
            this.props.dataCount(dataCount);
            return this;
        }

        /**
         * Property dataSize: The size of the dataset file in bytes.
         * <p>
         * @return {@code this}
         * @param dataSize Property dataSize: The size of the dataset file in bytes. This parameter is required.
         */
        public Builder dataSize(final java.lang.Number dataSize) {
            this.props.dataSize(dataSize);
            return this;
        }
        /**
         * Property dataSize: The size of the dataset file in bytes.
         * <p>
         * @return {@code this}
         * @param dataSize Property dataSize: The size of the dataset file in bytes. This parameter is required.
         */
        public Builder dataSize(final com.aliyun.ros.cdk.core.IResolvable dataSize) {
            this.props.dataSize(dataSize);
            return this;
        }

        /**
         * Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
         * <p>
         * @return {@code this}
         * @param description Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
         * <p>
         * @return {@code this}
         * @param description Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property labels: Dataset version tag list.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Dataset version tag list. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * Property labels: Dataset version tag list.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Dataset version tag list. This parameter is required.
         */
        public Builder labels(final java.util.List<? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * Property options: The extended field, which is of the JsonString type.
         * <p>
         * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
         * <p>
         * @return {@code this}
         * @param options Property options: The extended field, which is of the JsonString type. This parameter is required.
         */
        public Builder options(final java.lang.String options) {
            this.props.options(options);
            return this;
        }
        /**
         * Property options: The extended field, which is of the JsonString type.
         * <p>
         * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
         * <p>
         * @return {@code this}
         * @param options Property options: The extended field, which is of the JsonString type. This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }

        /**
         * Property sourceId: The data source ID.
         * <p>
         * <ul>
         * <li>When the SourceType is USER, SourceId can be customized.</li>
         * <li>When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.</li>
         * <li>When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: The data source ID. This parameter is required.
         */
        public Builder sourceId(final java.lang.String sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }
        /**
         * Property sourceId: The data source ID.
         * <p>
         * <ul>
         * <li>When the SourceType is USER, SourceId can be customized.</li>
         * <li>When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.</li>
         * <li>When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: The data source ID. This parameter is required.
         */
        public Builder sourceId(final com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }

        /**
         * Property sourceType: The data source type.
         * <p>
         * The default value is USER. The following values are supported:
         * <p>
         * <ul>
         * <li>PAI-PUBLIC-DATASET:PAI public dataset.</li>
         * <li>ITAG: The dataset generated by the iTAG module annotation result.</li>
         * <li>USER: The data set registered by the USER.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The data source type. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: The data source type.
         * <p>
         * The default value is USER. The following values are supported:
         * <p>
         * <ul>
         * <li>PAI-PUBLIC-DATASET:PAI public dataset.</li>
         * <li>ITAG: The dataset generated by the iTAG module annotation result.</li>
         * <li>USER: The data set registered by the USER.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The data source type. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.DatasetVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.DatasetVersion build() {
            return new com.aliyun.ros.cdk.pai.DatasetVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
