using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `AntiBruteForceRule`.</summary>
    [JsiiInterface(nativeType: typeof(IAntiBruteForceRule), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IAntiBruteForceRule")]
    public interface IAntiBruteForceRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AntiBruteForceRuleId: The ID of the defense rule.</summary>
        [JsiiProperty(name: "attrAntiBruteForceRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAntiBruteForceRuleId
        {
            get;
        }

        /// <summary>Attribute AntiBruteForceRuleName: The name of the defense rule.</summary>
        [JsiiProperty(name: "attrAntiBruteForceRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAntiBruteForceRuleName
        {
            get;
        }

        /// <summary>Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: yes</description>
        /// <description>false: no</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrDefaultRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultRule
        {
            get;
        }

        /// <summary>Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.</summary>
        [JsiiProperty(name: "attrFailCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFailCount
        {
            get;
        }

        /// <summary>Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.</summary>
        /// <remarks>
        /// Unit: minutes.
        /// </remarks>
        [JsiiProperty(name: "attrForbiddenTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrForbiddenTime
        {
            get;
        }

        /// <summary>Attribute Span: The period of time during which logon failures from an account are measured.</summary>
        /// <remarks>
        /// Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        /// </remarks>
        [JsiiProperty(name: "attrSpan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpan
        {
            get;
        }

        /// <summary>Attribute UuidList: The UUIDs of the server to which the defense rule is applied.</summary>
        [JsiiProperty(name: "attrUuidList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUuidList
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAntiBruteForceRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `AntiBruteForceRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAntiBruteForceRule), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IAntiBruteForceRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAntiBruteForceRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AntiBruteForceRuleId: The ID of the defense rule.</summary>
            [JsiiProperty(name: "attrAntiBruteForceRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAntiBruteForceRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AntiBruteForceRuleName: The name of the defense rule.</summary>
            [JsiiProperty(name: "attrAntiBruteForceRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAntiBruteForceRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: yes</description>
            /// <description>false: no</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "attrDefaultRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.</summary>
            [JsiiProperty(name: "attrFailCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFailCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.</summary>
            /// <remarks>
            /// Unit: minutes.
            /// </remarks>
            [JsiiProperty(name: "attrForbiddenTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrForbiddenTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Span: The period of time during which logon failures from an account are measured.</summary>
            /// <remarks>
            /// Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
            /// </remarks>
            [JsiiProperty(name: "attrSpan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UuidList: The UUIDs of the server to which the defense rule is applied.</summary>
            [JsiiProperty(name: "attrUuidList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUuidList
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAntiBruteForceRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAntiBruteForceRuleProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
