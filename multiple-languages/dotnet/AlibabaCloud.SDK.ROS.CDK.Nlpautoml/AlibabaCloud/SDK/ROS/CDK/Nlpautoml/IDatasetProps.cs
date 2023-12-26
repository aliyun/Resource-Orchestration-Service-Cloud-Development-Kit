using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlpautoml
{
    /// <summary>Properties for defining a `Dataset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.DatasetProps")]
    public interface IDatasetProps
    {
        /// <summary>Property datasetName: The name of dataset.</summary>
        /// <remarks>
        /// Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        /// </remarks>
        [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatasetName
        {
            get;
        }

        /// <summary>Property projectId: The ID of project.</summary>
        /// <remarks>
        /// To create a dataset under a certain project, fill in the target project ID.
        /// </remarks>
        [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectId
        {
            get;
        }

        /// <summary>Property datasetRecord: Upload labeled data to the dataset.</summary>
        [JsiiProperty(name: "datasetRecord", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatasetRecord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Dataset`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.DatasetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlpautoml.IDatasetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property datasetName: The name of dataset.</summary>
            /// <remarks>
            /// Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
            /// </remarks>
            [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatasetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectId: The ID of project.</summary>
            /// <remarks>
            /// To create a dataset under a certain project, fill in the target project ID.
            /// </remarks>
            [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property datasetRecord: Upload labeled data to the dataset.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "datasetRecord", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DatasetRecord
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
