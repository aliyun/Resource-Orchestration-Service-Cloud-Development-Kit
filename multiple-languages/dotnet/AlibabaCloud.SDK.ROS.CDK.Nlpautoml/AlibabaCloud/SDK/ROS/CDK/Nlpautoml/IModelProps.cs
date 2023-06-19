using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlpautoml
{
    /// <summary>Properties for defining a `ALIYUN::NLPAUTOML::Model`.</summary>
    [JsiiInterface(nativeType: typeof(IModelProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.ModelProps")]
    public interface IModelProps
    {
        /// <summary>Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.</summary>
        [JsiiProperty(name: "datasetIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object DatasetIdList
        {
            get;
        }

        /// <summary>Property modelName: The name of model.</summary>
        [JsiiProperty(name: "modelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ModelName
        {
            get;
        }

        /// <summary>Property modelType: The type of model.</summary>
        /// <remarks>
        /// Please refer to the documentation for the parameter values corresponding to different types of models.
        /// Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
        /// </remarks>
        [JsiiProperty(name: "modelType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ModelType
        {
            get;
        }

        /// <summary>Property projectId: The project id to which the model belongs.</summary>
        [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectId
        {
            get;
        }

        /// <summary>Property lr: Learning rate.</summary>
        [JsiiProperty(name: "lr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nepochs: Number of training dataset iterations.</summary>
        [JsiiProperty(name: "nepochs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Nepochs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property testDatasetIdList: Test set ID list.</summary>
        /// <remarks>
        /// Some models under text classification support adding test set data.
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

        /// <summary>Properties for defining a `ALIYUN::NLPAUTOML::Model`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IModelProps), fullyQualifiedName: "@alicloud/ros-cdk-nlpautoml.ModelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlpautoml.IModelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.</summary>
            [JsiiProperty(name: "datasetIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object DatasetIdList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property modelName: The name of model.</summary>
            [JsiiProperty(name: "modelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ModelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property modelType: The type of model.</summary>
            /// <remarks>
            /// Please refer to the documentation for the parameter values corresponding to different types of models.
            /// Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
            /// </remarks>
            [JsiiProperty(name: "modelType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ModelType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectId: The project id to which the model belongs.</summary>
            [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property lr: Learning rate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nepochs: Number of training dataset iterations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "nepochs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Nepochs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property testDatasetIdList: Test set ID list.</summary>
            /// <remarks>
            /// Some models under text classification support adding test set data.
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
