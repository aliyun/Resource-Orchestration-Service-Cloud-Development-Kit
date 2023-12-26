using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `Dataset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.DatasetProps")]
    public interface IDatasetProps
    {
        /// <summary>Property datasetName: The name of the dataset.</summary>
        /// <remarks>
        /// The naming rules are as follows:
        ///
        /// <list type="bullet">
        /// <description>Start with a lowercase letter, uppercase letter, number, or Chinese.</description>
        /// <description>Can contain an underscore (_) or a dash (-).</description>
        /// <description>1~127 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatasetName
        {
            get;
        }

        /// <summary>Property dataSourceType: The data source type.</summary>
        /// <remarks>
        /// The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>OSS: Alibaba Cloud Object Storage (OSS).</description>
        /// <description>NAS: Alibaba cloud file storage (NAS).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSourceType
        {
            get;
        }

        /// <summary>Property property: The properties of the dataset.</summary>
        /// <remarks>
        /// The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>FILE: FILE.</description>
        /// <description>DIRECTORY: folder.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "property", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Property
        {
            get;
        }

        /// <summary>Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object' - The data source type is NAS: The general NAS format is: 'nas:\/\/&lt;nasfisid&gt;.region\/subpath\/to\/dir\/'; CPFS1.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/subpath\/to\/dir \/'; CPFS2.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/&lt;protocolserviceid&gt;\/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.</summary>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uri
        {
            get;
        }

        /// <summary>Property workspaceId: The ID of the workspace where the dataset is located.</summary>
        /// <remarks>
        /// For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
        /// If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property accessibility: Workspace visibility.</summary>
        /// <remarks>
        /// The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>PRIVATE (default): indicates that the workspace is visible to itself and the administrator.</description>
        /// <description>PUBLIC: The workspace is visible to all users.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Accessibility
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataType: The dataset type.</summary>
        /// <remarks>
        /// The default value is COMMON. The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>COMMON: COMMON.</description>
        /// <description>PIC: picture.</description>
        /// <description>TEXT: TEXT.</description>
        /// <description>VIDEO: VIDEO.</description>
        /// <description>AUDIO: AUDIO.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Custom descriptions of datasets to distinguish between different datasets.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property options: The extended field, which is of the JsonString type.</summary>
        /// <remarks>
        /// When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
        /// </remarks>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceId: The data source ID.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When the SourceType is USER, SourceId can be customized.</description>
        /// <description>When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.</description>
        /// <description>When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceType: The data source type.</summary>
        /// <remarks>
        /// The default value is USER. The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>PAI-PUBLIC-DATASET:PAI public dataset.</description>
        /// <description>ITAG: The dataset generated by the iTAG module annotation result.</description>
        /// <description>USER: The data set registered by the USER.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Dataset`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.DatasetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IDatasetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property datasetName: The name of the dataset.</summary>
            /// <remarks>
            /// The naming rules are as follows:
            ///
            /// <list type="bullet">
            /// <description>Start with a lowercase letter, uppercase letter, number, or Chinese.</description>
            /// <description>Can contain an underscore (_) or a dash (-).</description>
            /// <description>1~127 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatasetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataSourceType: The data source type.</summary>
            /// <remarks>
            /// The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>OSS: Alibaba Cloud Object Storage (OSS).</description>
            /// <description>NAS: Alibaba cloud file storage (NAS).</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property property: The properties of the dataset.</summary>
            /// <remarks>
            /// The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>FILE: FILE.</description>
            /// <description>DIRECTORY: folder.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "property", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Property
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object' - The data source type is NAS: The general NAS format is: 'nas:\/\/&lt;nasfisid&gt;.region\/subpath\/to\/dir\/'; CPFS1.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/subpath\/to\/dir \/'; CPFS2.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/&lt;protocolserviceid&gt;\/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.</summary>
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: The ID of the workspace where the dataset is located.</summary>
            /// <remarks>
            /// For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
            /// If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
            /// </remarks>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessibility: Workspace visibility.</summary>
            /// <remarks>
            /// The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>PRIVATE (default): indicates that the workspace is visible to itself and the administrator.</description>
            /// <description>PUBLIC: The workspace is visible to all users.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Accessibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataType: The dataset type.</summary>
            /// <remarks>
            /// The default value is COMMON. The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>COMMON: COMMON.</description>
            /// <description>PIC: picture.</description>
            /// <description>TEXT: TEXT.</description>
            /// <description>VIDEO: VIDEO.</description>
            /// <description>AUDIO: AUDIO.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Custom descriptions of datasets to distinguish between different datasets.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property options: The extended field, which is of the JsonString type.</summary>
            /// <remarks>
            /// When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceId: The data source ID.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When the SourceType is USER, SourceId can be customized.</description>
            /// <description>When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.</description>
            /// <description>When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceType: The data source type.</summary>
            /// <remarks>
            /// The default value is USER. The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>PAI-PUBLIC-DATASET:PAI public dataset.</description>
            /// <description>ITAG: The dataset generated by the iTAG module annotation result.</description>
            /// <description>USER: The data set registered by the USER.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
