package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::Dataset</code>, which is used to create a dataset.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.659Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.Dataset")
public class Dataset extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IDataset {

    protected Dataset(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Dataset(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Dataset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Dataset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Accessibility: Workspace visibility.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DatasetId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDatasetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DatasetName: The name of the dataset.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatasetName() {
        return software.amazon.jsii.Kernel.get(this, "attrDatasetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataSourceType: The data source type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataType: The dataset type.
     * <p>
     * The default value is COMMON.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataType() {
        return software.amazon.jsii.Kernel.get(this, "attrDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtModifiedTime: Update time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Options: The extended field, which is of the JsonString type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
        return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OwnerId: The ID of the primary account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Property: The properties of the dataset.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProperty() {
        return software.amazon.jsii.Kernel.get(this, "attrProperty", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceId: The data source ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceType: The data source type.
     * <p>
     * The default value is USER.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Uri: The Uri configuration sample is as follows:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
        return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: The ID of the user to which the dataset belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.DatasetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.DatasetProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.Dataset}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.Dataset> {
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
        private final com.aliyun.ros.cdk.pai.DatasetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.DatasetProps.Builder();
        }

        /**
         * Property datasetName: The name of the dataset.
         * <p>
         * The naming rules are as follows:
         * <p>
         * <ul>
         * <li>Start with a lowercase letter, uppercase letter, number, or Chinese.</li>
         * <li>Can contain an underscore (_) or a dash (-).</li>
         * <li>1~127 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param datasetName Property datasetName: The name of the dataset. This parameter is required.
         */
        public Builder datasetName(final java.lang.String datasetName) {
            this.props.datasetName(datasetName);
            return this;
        }
        /**
         * Property datasetName: The name of the dataset.
         * <p>
         * The naming rules are as follows:
         * <p>
         * <ul>
         * <li>Start with a lowercase letter, uppercase letter, number, or Chinese.</li>
         * <li>Can contain an underscore (_) or a dash (-).</li>
         * <li>1~127 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param datasetName Property datasetName: The name of the dataset. This parameter is required.
         */
        public Builder datasetName(final com.aliyun.ros.cdk.core.IResolvable datasetName) {
            this.props.datasetName(datasetName);
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
         * Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:// bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:// bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;. This parameter is required.
         */
        public Builder uri(final java.lang.String uri) {
            this.props.uri(uri);
            return this;
        }
        /**
         * Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:// bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:// bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://<nasfisid>.region/subpath/to/dir/'; CPFS1.0:'nas://<cpfs-fsid>.region/subpath/to/dir /'; CPFS2.0:'nas://<cpfs-fsid>.region/<protocolserviceid>/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;. This parameter is required.
         */
        public Builder uri(final com.aliyun.ros.cdk.core.IResolvable uri) {
            this.props.uri(uri);
            return this;
        }

        /**
         * Property workspaceId: The ID of the workspace where the dataset is located.
         * <p>
         * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace where the dataset is located. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: The ID of the workspace where the dataset is located.
         * <p>
         * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace where the dataset is located. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property accessibility: Workspace visibility.
         * <p>
         * The following values are supported:
         * <p>
         * <ul>
         * <li>PRIVATE (default): indicates that the workspace is visible to itself and the administrator.</li>
         * <li>PUBLIC: The workspace is visible to all users.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Workspace visibility. This parameter is required.
         */
        public Builder accessibility(final java.lang.String accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }
        /**
         * Property accessibility: Workspace visibility.
         * <p>
         * The following values are supported:
         * <p>
         * <ul>
         * <li>PRIVATE (default): indicates that the workspace is visible to itself and the administrator.</li>
         * <li>PUBLIC: The workspace is visible to all users.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Workspace visibility. This parameter is required.
         */
        public Builder accessibility(final com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }

        /**
         * Property dataType: The dataset type.
         * <p>
         * The default value is COMMON. The following values are supported:
         * <p>
         * <ul>
         * <li>COMMON: COMMON.</li>
         * <li>PIC: picture.</li>
         * <li>TEXT: TEXT.</li>
         * <li>VIDEO: VIDEO.</li>
         * <li>AUDIO: AUDIO.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dataType Property dataType: The dataset type. This parameter is required.
         */
        public Builder dataType(final java.lang.String dataType) {
            this.props.dataType(dataType);
            return this;
        }
        /**
         * Property dataType: The dataset type.
         * <p>
         * The default value is COMMON. The following values are supported:
         * <p>
         * <ul>
         * <li>COMMON: COMMON.</li>
         * <li>PIC: picture.</li>
         * <li>TEXT: TEXT.</li>
         * <li>VIDEO: VIDEO.</li>
         * <li>AUDIO: AUDIO.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dataType Property dataType: The dataset type. This parameter is required.
         */
        public Builder dataType(final com.aliyun.ros.cdk.core.IResolvable dataType) {
            this.props.dataType(dataType);
            return this;
        }

        /**
         * Property description: Custom descriptions of datasets to distinguish between different datasets.
         * <p>
         * @return {@code this}
         * @param description Property description: Custom descriptions of datasets to distinguish between different datasets. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Custom descriptions of datasets to distinguish between different datasets.
         * <p>
         * @return {@code this}
         * @param description Property description: Custom descriptions of datasets to distinguish between different datasets. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.Dataset}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.Dataset build() {
            return new com.aliyun.ros.cdk.pai.Dataset(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
