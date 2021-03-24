using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Deployment`.</summary>
    [JsiiInterface(nativeType: typeof(IDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.DeploymentProps")]
    public interface IDeploymentProps
    {
        /// <summary>Property apiId: The id of the API.</summary>
        [JsiiProperty(name: "apiId", typeJson: "{\"primitive\":\"string\"}")]
        string ApiId
        {
            get;
        }

        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <summary>Property stageName: Bind traffic in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
        string StageName
        {
            get;
        }

        /// <summary>Property description: Description of the deployment, less than 180 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property historyVersion: The history version.</summary>
        [JsiiProperty(name: "historyVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HistoryVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::Deployment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.DeploymentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IDeploymentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiId: The id of the API.</summary>
            [JsiiProperty(name: "apiId", typeJson: "{\"primitive\":\"string\"}")]
            public string ApiId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property groupId: The id of the Group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property stageName: Bind traffic in this stage.</summary>
            [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
            public string StageName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of the deployment, less than 180 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property historyVersion: The history version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "historyVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HistoryVersion
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
