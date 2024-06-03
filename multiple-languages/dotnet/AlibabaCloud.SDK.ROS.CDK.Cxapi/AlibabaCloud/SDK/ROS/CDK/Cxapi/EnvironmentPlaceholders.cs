using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Placeholders which can be used manifests.</summary>
    /// <remarks>
    /// These can occur both in the Asset Manifest as well as the general
    /// Cloud Assembly manifest.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentPlaceholders), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders")]
    public class EnvironmentPlaceholders : DeputyBase
    {
        public EnvironmentPlaceholders(): base(_MakeDeputyProps())
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps()
        {
            return new DeputyProps(System.Array.Empty<object?>());
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EnvironmentPlaceholders(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EnvironmentPlaceholders(DeputyProps props): base(props)
        {
        }

        /// <summary>Replace the environment placeholders in all strings found in a complex object.</summary>
        [JsiiMethod(name: "replace", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"object\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"values\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.EnvironmentPlaceholderValues\"}}]")]
        public static object Replace(object @object, AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironmentPlaceholderValues values)
        {
            return InvokeStaticMethod<object>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentPlaceholders), new System.Type[]{typeof(object), typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironmentPlaceholderValues)}, new object[]{@object, values})!;
        }

        /// <summary>Like 'replace', but asynchronous.</summary>
        [JsiiMethod(name: "replaceAsync", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"object\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"provider\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.IEnvironmentPlaceholderProvider\"}}]", isAsync: true)]
        public static object ReplaceAsync(object @object, AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironmentPlaceholderProvider provider)
        {
            return InvokeStaticMethod<object>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentPlaceholders), new System.Type[]{typeof(object), typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironmentPlaceholderProvider)}, new object[]{@object, provider})!;
        }

        /// <summary>Insert this into the destination fields to be replaced with the current account.</summary>
        [JsiiProperty(name: "CURRENT_ACCOUNT", typeJson: "{\"primitive\":\"string\"}")]
        public static string CURRENT_ACCOUNT
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentPlaceholders))!;

        /// <summary>Insert this into the destination fields to be replaced with the current region.</summary>
        [JsiiProperty(name: "CURRENT_REGION", typeJson: "{\"primitive\":\"string\"}")]
        public static string CURRENT_REGION
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentPlaceholders))!;
    }
}
