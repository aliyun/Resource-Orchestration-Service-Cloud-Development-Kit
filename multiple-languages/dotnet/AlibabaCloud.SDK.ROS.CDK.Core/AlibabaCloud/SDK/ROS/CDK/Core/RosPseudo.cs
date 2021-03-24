using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Accessor for pseudo parameters.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosPseudo), fullyQualifiedName: "@alicloud/ros-cdk-core.RosPseudo")]
    public class RosPseudo : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPseudo(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPseudo(DeputyProps props): base(props)
        {
        }

        [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}")]
        public static string AccountId
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosPseudo))!;
        }

        [JsiiProperty(name: "noValue", typeJson: "{\"primitive\":\"string\"}")]
        public static string NoValue
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosPseudo))!;
        }

        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        public static string Region
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosPseudo))!;
        }

        [JsiiProperty(name: "stackId", typeJson: "{\"primitive\":\"string\"}")]
        public static string StackId
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosPseudo))!;
        }

        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}")]
        public static string StackName
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosPseudo))!;
        }

        [JsiiProperty(name: "tenantId", typeJson: "{\"primitive\":\"string\"}")]
        public static string TenantId
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosPseudo))!;
        }
    }
}
