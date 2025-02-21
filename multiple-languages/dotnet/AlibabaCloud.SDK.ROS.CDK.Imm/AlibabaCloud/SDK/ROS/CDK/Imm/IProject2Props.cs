using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Imm
{
    /// <summary>Properties for defining a `Project2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProject2Props), fullyQualifiedName: "@alicloud/ros-cdk-imm.Project2Props")]
    public interface IProject2Props
    {
        /// <summary>Property projectName: The name of project.</summary>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property datasetMaxBindCount: The maximum number of bindings for each dataset.</summary>
        /// <remarks>
        /// Valid values: 1 to 10. Default value: 10.
        /// </remarks>
        [JsiiProperty(name: "datasetMaxBindCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatasetMaxBindCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.</summary>
        /// <remarks>
        /// Default value: 10000000000.
        /// </remarks>
        [JsiiProperty(name: "datasetMaxEntityCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatasetMaxEntityCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property datasetMaxFileCount: The maximum number of files in each dataset.</summary>
        /// <remarks>
        /// Valid values: 1 to 100000000. Default value: 100000000.
        /// </remarks>
        [JsiiProperty(name: "datasetMaxFileCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatasetMaxFileCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.</summary>
        /// <remarks>
        /// Default value: 100000000000.
        /// </remarks>
        [JsiiProperty(name: "datasetMaxRelationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatasetMaxRelationCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property datasetMaxTotalFileSize: The maximum size of files in each dataset.</summary>
        /// <remarks>
        /// If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
        /// </remarks>
        [JsiiProperty(name: "datasetMaxTotalFileSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatasetMaxTotalFileSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of project.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property projectMaxDatasetCount: The maximum number of datasets in the project.</summary>
        /// <remarks>
        /// Valid values: 1 to 1000000000. Default value: 1000000000.
        /// </remarks>
        [JsiiProperty(name: "projectMaxDatasetCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectMaxDatasetCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceRole: 	The name of the Resource Access Management (RAM) role.</summary>
        /// <remarks>
        /// You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
        /// </remarks>
        [JsiiProperty(name: "serviceRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceRole
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateId: The ID of the workflow template.</summary>
        /// <remarks>
        /// You can leave this parameter empty.
        /// </remarks>
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Project2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProject2Props), fullyQualifiedName: "@alicloud/ros-cdk-imm.Project2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Imm.IProject2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property projectName: The name of project.</summary>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property datasetMaxBindCount: The maximum number of bindings for each dataset.</summary>
            /// <remarks>
            /// Valid values: 1 to 10. Default value: 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "datasetMaxBindCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatasetMaxBindCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.</summary>
            /// <remarks>
            /// Default value: 10000000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "datasetMaxEntityCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatasetMaxEntityCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property datasetMaxFileCount: The maximum number of files in each dataset.</summary>
            /// <remarks>
            /// Valid values: 1 to 100000000. Default value: 100000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "datasetMaxFileCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatasetMaxFileCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.</summary>
            /// <remarks>
            /// Default value: 100000000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "datasetMaxRelationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatasetMaxRelationCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property datasetMaxTotalFileSize: The maximum size of files in each dataset.</summary>
            /// <remarks>
            /// If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "datasetMaxTotalFileSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatasetMaxTotalFileSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of project.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property projectMaxDatasetCount: The maximum number of datasets in the project.</summary>
            /// <remarks>
            /// Valid values: 1 to 1000000000. Default value: 1000000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "projectMaxDatasetCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectMaxDatasetCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceRole: 	The name of the Resource Access Management (RAM) role.</summary>
            /// <remarks>
            /// You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceRole
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateId: The ID of the workflow template.</summary>
            /// <remarks>
            /// You can leave this parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
