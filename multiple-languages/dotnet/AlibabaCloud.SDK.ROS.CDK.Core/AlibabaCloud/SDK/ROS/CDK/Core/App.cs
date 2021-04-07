using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A construct which represents an entire CDK app. This construct is normally the root of the construct tree.</summary>
    /// <remarks>
    /// You would normally define an 'App' instance in your program's entrypoint,
    /// then define constructs where the app is used as the parent scope.
    ///
    /// After all the child constructs are defined within the app, you should call
    /// 'app.synth()' which will emit a "ros template" from this app into the
    /// directory specified by 'outdir'.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.App), fullyQualifiedName: "@alicloud/ros-cdk-core.App", parametersJson: "[{\"docs\":{\"summary\":\"initialization properties.\"},\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.AppProps\"}}]")]
    public class App : AlibabaCloud.SDK.ROS.CDK.Core.Stage
    {
        /// <summary>Initializes a CDK application.</summary>
        /// <param name="props">initialization properties.</param>
        public App(AlibabaCloud.SDK.ROS.CDK.Core.IAppProps? props = null): base(new DeputyProps(new object?[]{props}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected App(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected App(DeputyProps props): base(props)
        {
        }

        /// <summary>Checks if an object is an instance of the 'App' class.</summary>
        /// <remarks>
        /// Returns 'true' if 'obj' is an 'App'.
        /// Param obj The object to evaluate
        /// </remarks>
        [JsiiMethod(name: "isApp", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsApp(object obj)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.App), new System.Type[]{typeof(object)}, new object[]{obj})!;
        }
    }
}
