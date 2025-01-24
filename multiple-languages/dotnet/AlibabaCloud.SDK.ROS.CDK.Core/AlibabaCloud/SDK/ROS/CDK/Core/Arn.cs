using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Arn), fullyQualifiedName: "@alicloud/ros-cdk-core.Arn")]
    public class Arn : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Arn(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Arn(DeputyProps props): base(props)
        {
        }

        /// <summary>Extract the full resource name from an ARN.</summary>
        /// <remarks>
        /// Necessary for resource names (paths) that may contain the separator, like
        /// <c>acs:ram::123456789012****:role/adminrole/alice</c>.
        ///
        /// Only works if we statically know the expected <c>resourceType</c> beforehand, since we're going
        /// to use that to split the string on ':<resourceType xmlns="http://www.w3.org/1999/xhtml"></resourceType>/' (and take the right-hand side).
        ///
        /// We can't extract the 'resourceType' from the ARN at hand, because ROS Expressions
        /// only allow literals in the 'separator' argument to <c>{ Fn::Split }</c>, and so it can't be
        /// <c>{ Fn::Select: [5, { Fn::Split: [':', ARN] }}</c>.
        ///
        /// Only necessary for ARN formats for which the type-name separator is <c>/</c>.
        /// </remarks>
        [JsiiMethod(name: "extractResourceName", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"arn\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"resourceType\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string ExtractResourceName(string arn, string resourceType)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Arn), new System.Type[]{typeof(string), typeof(string)}, new object[]{arn, resourceType})!;
        }

        /// <summary>Creates an ARN from components.</summary>
        /// <remarks>
        /// If <c>partition</c>, <c>region</c> or <c>account</c> are not specified, the stack's
        /// partition, region and account will be used.
        ///
        /// If any component is the empty string, an empty string will be inserted
        /// into the generated ARN at the location that component corresponds to.
        ///
        /// The ARN will be formatted as follows:
        ///
        /// {partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}
        ///
        /// The required ARN pieces that are omitted will be taken from the stack that
        /// the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
        /// can be 'undefined'.
        /// </remarks>
        [JsiiMethod(name: "format", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"components\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ArnComponents\"}},{\"name\":\"stack\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        public static string Format(AlibabaCloud.SDK.ROS.CDK.Core.IArnComponents components, AlibabaCloud.SDK.ROS.CDK.Core.Stack? stack = null)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Arn), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IArnComponents), typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object?[]{components, stack})!;
        }

        /// <summary>Splits the provided ARN into its components.</summary>
        /// <param name="arn">the ARN to split into its components.</param>
        /// <param name="arnFormat">the expected format of 'arn' - depends on what format the service 'arn' represents uses.</param>
        /// <remarks>
        /// Works both if 'arn' is a string like 'acs:oss:::bucket',
        /// and a Token representing a dynamic CloudFormation expression
        /// (in which case the returned components will also be dynamic ROS expressions,
        /// encoded as Tokens).
        /// </remarks>
        [JsiiMethod(name: "split", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ArnComponents\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the ARN to split into its components.\"},\"name\":\"arn\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"summary\":\"the expected format of 'arn' - depends on what format the service 'arn' represents uses.\"},\"name\":\"arnFormat\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ArnFormat\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IArnComponents Split(object arn, AlibabaCloud.SDK.ROS.CDK.Core.ArnFormat arnFormat)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (arn)
                {
                    case string cast_42e7ab:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_42e7ab:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_42e7ab:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(arn)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(arn));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(arn)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {arn.GetType().FullName}", nameof(arn));
                }
            }
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IArnComponents>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Arn), new System.Type[]{typeof(object), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ArnFormat)}, new object[]{arn, arnFormat})!;
        }
    }
}
