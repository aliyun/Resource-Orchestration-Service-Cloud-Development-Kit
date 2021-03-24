using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IRosVpcAccessConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosVpcAccessConfigProps")]
    public interface IRosVpcAccessConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The id of the instance (ECS/SLB).
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The port of the VPC.
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
        double Port
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The id of the VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        string VpcId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcAccessConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosVpcAccessConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosVpcAccessConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The id of the instance (ECS/SLB).
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port of the VPC.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            public double Port
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The id of the VPC.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpcId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
