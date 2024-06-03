using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentUtils), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.EnvironmentUtils")]
    public class EnvironmentUtils : DeputyBase
    {
        public EnvironmentUtils(): base(_MakeDeputyProps())
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
        protected EnvironmentUtils(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EnvironmentUtils(DeputyProps props): base(props)
        {
        }

        /// <summary>Format an environment string from an account and region.</summary>
        [JsiiMethod(name: "format", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"account\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"region\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Format(string account, string region)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentUtils), new System.Type[]{typeof(string), typeof(string)}, new object[]{account, region})!;
        }

        /// <summary>Build an environment object from an account and region.</summary>
        [JsiiMethod(name: "make", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.Environment\"}}", parametersJson: "[{\"name\":\"account\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"region\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironment Make(string account, string region)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironment>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentUtils), new System.Type[]{typeof(string), typeof(string)}, new object[]{account, region})!;
        }

        [JsiiMethod(name: "parse", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.Environment\"}}", parametersJson: "[{\"name\":\"environment\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironment Parse(string environment)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironment>(typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.EnvironmentUtils), new System.Type[]{typeof(string)}, new object[]{environment})!;
        }
    }
}
