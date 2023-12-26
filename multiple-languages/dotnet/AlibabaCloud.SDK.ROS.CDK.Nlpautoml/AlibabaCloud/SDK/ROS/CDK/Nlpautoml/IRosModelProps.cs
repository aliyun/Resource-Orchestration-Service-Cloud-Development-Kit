using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlpautoml
{
    /// <summary>Properties for defining a `RosModel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosModelProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.RosModelProps")]
    public interface IRosModelProps
    {
        /// <remarks>
        /// <strong>Property</strong>: datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
        /// </remarks>
        [JsiiProperty(name: "datasetIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object DatasetIdList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: modelName: The name of model.
        /// </remarks>
        [JsiiProperty(name: "modelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ModelName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
        /// Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
        /// </remarks>
        [JsiiProperty(name: "modelType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ModelType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectId: The project id to which the model belongs
        /// </remarks>
        [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: lr: Learning rate.
        /// </remarks>
        [JsiiProperty(name: "lr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lr
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nepochs: Number of training dataset iterations
        /// </remarks>
        [JsiiProperty(name: "nepochs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Nepochs
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
        /// </remarks>
        [JsiiProperty(name: "testDatasetIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TestDatasetIdList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosModel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosModelProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.RosModelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlpautoml.IRosModelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
            /// </remarks>
            [JsiiProperty(name: "datasetIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object DatasetIdList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: modelName: The name of model.
            /// </remarks>
            [JsiiProperty(name: "modelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ModelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
            /// Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
            /// </remarks>
            [JsiiProperty(name: "modelType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ModelType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectId: The project id to which the model belongs
            /// </remarks>
            [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: lr: Learning rate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nepochs: Number of training dataset iterations
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nepochs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Nepochs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "testDatasetIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TestDatasetIdList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
