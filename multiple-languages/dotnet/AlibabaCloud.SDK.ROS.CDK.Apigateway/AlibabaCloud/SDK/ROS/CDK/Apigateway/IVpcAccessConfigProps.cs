using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IVpcAccessConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.VpcAccessConfigProps")]
    public interface IVpcAccessConfigProps
    {
        /// <summary>Property instanceId: The id of the instance (ECS/SLB).</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property port: The port of the VPC.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
        double Port
        {
            get;
        }

        /// <summary>Property vpcId: The id of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        string VpcId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcAccessConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.VpcAccessConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IVpcAccessConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The id of the instance (ECS/SLB).</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property port: The port of the VPC.</summary>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            public double Port
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property vpcId: The id of the VPC.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpcId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
