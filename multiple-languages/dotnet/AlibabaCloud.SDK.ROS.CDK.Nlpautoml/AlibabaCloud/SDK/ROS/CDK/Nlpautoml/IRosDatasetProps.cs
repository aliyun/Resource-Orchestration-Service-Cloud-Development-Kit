using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlpautoml
{
    /// <summary>Properties for defining a `RosDataset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.RosDatasetProps")]
    public interface IRosDatasetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        /// </remarks>
        [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatasetName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
        /// </remarks>
        [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: datasetRecord: Upload labeled data to the dataset.
        /// </remarks>
        [JsiiProperty(name: "datasetRecord", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatasetRecord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDataset`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.RosDatasetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlpautoml.IRosDatasetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
            /// </remarks>
            [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatasetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
            /// </remarks>
            [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: datasetRecord: Upload labeled data to the dataset.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "datasetRecord", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DatasetRecord
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
