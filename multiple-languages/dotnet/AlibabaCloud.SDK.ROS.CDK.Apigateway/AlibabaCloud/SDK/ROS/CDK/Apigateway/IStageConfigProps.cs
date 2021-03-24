using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::StageConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IStageConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.StageConfigProps")]
    public interface IStageConfigProps
    {
        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <summary>Property stageName: The name of the Stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
        string StageName
        {
            get;
        }

        /// <summary>Property variables: Variables in the stage, key-value pairs.</summary>
        [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Variables
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::StageConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStageConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.StageConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IStageConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupId: The id of the Group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property stageName: The name of the Stage.</summary>
            [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
            public string StageName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property variables: Variables in the stage, key-value pairs.</summary>
            [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Variables
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
