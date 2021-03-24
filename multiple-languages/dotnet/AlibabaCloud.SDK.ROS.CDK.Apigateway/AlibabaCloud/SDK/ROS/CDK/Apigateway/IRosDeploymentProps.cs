using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Deployment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosDeploymentProps")]
    public interface IRosDeploymentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiId: The id of the API.
        /// </remarks>
        [JsiiProperty(name: "apiId", typeJson: "{\"primitive\":\"string\"}")]
        string ApiId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Bind traffic in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
        string StageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the deployment, less than 180 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: historyVersion: The history version.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosDeploymentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosDeploymentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiId: The id of the API.
            /// </remarks>
            [JsiiProperty(name: "apiId", typeJson: "{\"primitive\":\"string\"}")]
            public string ApiId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The id of the Group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stageName: Bind traffic in this stage.
            /// </remarks>
            [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
            public string StageName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the deployment, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: historyVersion: The history version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "historyVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HistoryVersion
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
