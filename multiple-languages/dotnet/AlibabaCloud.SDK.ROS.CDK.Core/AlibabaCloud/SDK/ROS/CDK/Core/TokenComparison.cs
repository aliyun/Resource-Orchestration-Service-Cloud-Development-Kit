using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>An enum-like class that represents the result of comparing two Tokens.</summary>
    /// <remarks>
    /// The return type of <c>Token.compareStrings</c>.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison), fullyQualifiedName: "@alicloud/ros-cdk-core.TokenComparison")]
    public class TokenComparison : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TokenComparison(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TokenComparison(DeputyProps props): base(props)
        {
        }

        /// <summary>This means both components are Tokens.</summary>
        [JsiiProperty(name: "BOTH_UNRESOLVED", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TokenComparison\"}")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison BOTH_UNRESOLVED
        {
            get;
        }
        = GetStaticProperty<AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison))!;

        /// <summary>This means we're certain the two components are NOT Tokens, and different.</summary>
        [JsiiProperty(name: "DIFFERENT", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TokenComparison\"}")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison DIFFERENT
        {
            get;
        }
        = GetStaticProperty<AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison))!;

        /// <summary>This means exactly one of the components is a Token.</summary>
        [JsiiProperty(name: "ONE_UNRESOLVED", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TokenComparison\"}")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison ONE_UNRESOLVED
        {
            get;
        }
        = GetStaticProperty<AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison))!;

        /// <summary>This means we're certain the two components are NOT Tokens, and identical.</summary>
        [JsiiProperty(name: "SAME", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TokenComparison\"}")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison SAME
        {
            get;
        }
        = GetStaticProperty<AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenComparison))!;
    }
}
