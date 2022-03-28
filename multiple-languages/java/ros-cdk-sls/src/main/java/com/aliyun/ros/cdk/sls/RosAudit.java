package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Audit`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.669Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAudit")
public class RosAudit extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAudit(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAudit(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosAudit.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SLS::Audit`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAudit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosAuditProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVariableMap() {
        return software.amazon.jsii.Kernel.get(this, "variableMap", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVariableMap(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "variableMap", java.util.Objects.requireNonNull(value, "variableMap is required"));
    }

    /**
     */
    public void setVariableMap(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosAudit.VariableMapProperty value) {
        software.amazon.jsii.Kernel.set(this, "variableMap", java.util.Objects.requireNonNull(value, "variableMap is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiAccount() {
        return software.amazon.jsii.Kernel.get(this, "multiAccount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiAccount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiAccount", value);
    }

    /**
     */
    public void setMultiAccount(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "multiAccount", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty")
    @software.amazon.jsii.Jsii.Proxy(VariableMapProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VariableMapProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActiontrailEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActiontrailOpenapiCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActiontrailOpenapiPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActiontrailTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActiontrailTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApigatewayAccessCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApigatewayAccessPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApigatewayEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApigatewayTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApigatewayTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppconnectEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppconnectOpCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppconnectOpPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppconnectTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppconnectTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBastionAuditCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBastionAuditPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBastionEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBastionTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBastionTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCloudfirewallAccessCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCloudfirewallAccessPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCloudfirewallEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCloudfirewallTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCloudfirewallTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpsCallbackCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpsCallbackPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpsEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpsTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpsTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDdosCooAccessCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDdosCooAccessEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDdosCooAccessPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDdosCooAccessTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDdosCooAccessTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDrdsAuditCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDrdsAuditEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDrdsAuditPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDrdsAuditTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDrdsAuditTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDrdsSyncEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDrdsSyncTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SAuditCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SAuditEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SAuditPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SAuditTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SAuditTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SEventCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SEventEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SEventPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SEventTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SEventTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SIngressCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SIngressEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SIngressPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SIngressTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK8SIngressTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasAuditCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasAuditPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssMeteringCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssMeteringEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssMeteringPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssMeteringTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssMeteringTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssSyncEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssSyncTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbAuditCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbAuditPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbPerfCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbPerfEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbPerfPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbPerfTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbPerfTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbSlowCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbSlowEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbSlowPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbSlowTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbSlowTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolardbTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsAuditCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsAuditPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsPerfCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsPerfEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsPerfPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsPerfTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsPerfTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsSlowCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsSlowEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsSlowPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsSlowTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsSlowTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisAuditCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisAuditEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisAuditPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisAuditTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisAuditTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisSyncEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisSyncTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasCrackEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasDnsEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasHttpEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasLocalDnsEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasLoginEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasNetworkEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasProcessEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasSecurityAlertEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasSecurityHcEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasSecurityVulEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasSessionEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasSnapshotAccountEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasSnapshotPortEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasSnapshotProcessEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbAccessCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbAccessEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbAccessPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbAccessTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbAccessTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbSyncEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbSyncTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWafAccessCollectionPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWafAccessPolicySetting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWafEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWafTiEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWafTtl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VariableMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VariableMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VariableMapProperty> {
            java.lang.Object actiontrailEnabled;
            java.lang.Object actiontrailOpenapiCollectionPolicy;
            java.lang.Object actiontrailOpenapiPolicySetting;
            java.lang.Object actiontrailTiEnabled;
            java.lang.Object actiontrailTtl;
            java.lang.Object apigatewayAccessCollectionPolicy;
            java.lang.Object apigatewayAccessPolicySetting;
            java.lang.Object apigatewayEnabled;
            java.lang.Object apigatewayTiEnabled;
            java.lang.Object apigatewayTtl;
            java.lang.Object appconnectEnabled;
            java.lang.Object appconnectOpCollectionPolicy;
            java.lang.Object appconnectOpPolicySetting;
            java.lang.Object appconnectTiEnabled;
            java.lang.Object appconnectTtl;
            java.lang.Object bastionAuditCollectionPolicy;
            java.lang.Object bastionAuditPolicySetting;
            java.lang.Object bastionEnabled;
            java.lang.Object bastionTiEnabled;
            java.lang.Object bastionTtl;
            java.lang.Object cloudfirewallAccessCollectionPolicy;
            java.lang.Object cloudfirewallAccessPolicySetting;
            java.lang.Object cloudfirewallEnabled;
            java.lang.Object cloudfirewallTiEnabled;
            java.lang.Object cloudfirewallTtl;
            java.lang.Object cpsCallbackCollectionPolicy;
            java.lang.Object cpsCallbackPolicySetting;
            java.lang.Object cpsEnabled;
            java.lang.Object cpsTiEnabled;
            java.lang.Object cpsTtl;
            java.lang.Object ddosCooAccessCollectionPolicy;
            java.lang.Object ddosCooAccessEnabled;
            java.lang.Object ddosCooAccessPolicySetting;
            java.lang.Object ddosCooAccessTiEnabled;
            java.lang.Object ddosCooAccessTtl;
            java.lang.Object drdsAuditCollectionPolicy;
            java.lang.Object drdsAuditEnabled;
            java.lang.Object drdsAuditPolicySetting;
            java.lang.Object drdsAuditTiEnabled;
            java.lang.Object drdsAuditTtl;
            java.lang.Object drdsSyncEnabled;
            java.lang.Object drdsSyncTtl;
            java.lang.Object k8SAuditCollectionPolicy;
            java.lang.Object k8SAuditEnabled;
            java.lang.Object k8SAuditPolicySetting;
            java.lang.Object k8SAuditTiEnabled;
            java.lang.Object k8SAuditTtl;
            java.lang.Object k8SEventCollectionPolicy;
            java.lang.Object k8SEventEnabled;
            java.lang.Object k8SEventPolicySetting;
            java.lang.Object k8SEventTiEnabled;
            java.lang.Object k8SEventTtl;
            java.lang.Object k8SIngressCollectionPolicy;
            java.lang.Object k8SIngressEnabled;
            java.lang.Object k8SIngressPolicySetting;
            java.lang.Object k8SIngressTiEnabled;
            java.lang.Object k8SIngressTtl;
            java.lang.Object nasAuditCollectionPolicy;
            java.lang.Object nasAuditPolicySetting;
            java.lang.Object nasEnabled;
            java.lang.Object nasTiEnabled;
            java.lang.Object nasTtl;
            java.lang.Object ossAccessCollectionPolicy;
            java.lang.Object ossAccessEnabled;
            java.lang.Object ossAccessPolicySetting;
            java.lang.Object ossAccessTiEnabled;
            java.lang.Object ossAccessTtl;
            java.lang.Object ossMeteringCollectionPolicy;
            java.lang.Object ossMeteringEnabled;
            java.lang.Object ossMeteringPolicySetting;
            java.lang.Object ossMeteringTiEnabled;
            java.lang.Object ossMeteringTtl;
            java.lang.Object ossSyncEnabled;
            java.lang.Object ossSyncTtl;
            java.lang.Object polardbAuditCollectionPolicy;
            java.lang.Object polardbAuditPolicySetting;
            java.lang.Object polardbEnabled;
            java.lang.Object polardbPerfCollectionPolicy;
            java.lang.Object polardbPerfEnabled;
            java.lang.Object polardbPerfPolicySetting;
            java.lang.Object polardbPerfTiEnabled;
            java.lang.Object polardbPerfTtl;
            java.lang.Object polardbSlowCollectionPolicy;
            java.lang.Object polardbSlowEnabled;
            java.lang.Object polardbSlowPolicySetting;
            java.lang.Object polardbSlowTiEnabled;
            java.lang.Object polardbSlowTtl;
            java.lang.Object polardbTiEnabled;
            java.lang.Object polardbTtl;
            java.lang.Object rdsAuditCollectionPolicy;
            java.lang.Object rdsAuditPolicySetting;
            java.lang.Object rdsEnabled;
            java.lang.Object rdsPerfCollectionPolicy;
            java.lang.Object rdsPerfEnabled;
            java.lang.Object rdsPerfPolicySetting;
            java.lang.Object rdsPerfTiEnabled;
            java.lang.Object rdsPerfTtl;
            java.lang.Object rdsSlowCollectionPolicy;
            java.lang.Object rdsSlowEnabled;
            java.lang.Object rdsSlowPolicySetting;
            java.lang.Object rdsSlowTiEnabled;
            java.lang.Object rdsSlowTtl;
            java.lang.Object rdsTiEnabled;
            java.lang.Object rdsTtl;
            java.lang.Object redisAuditCollectionPolicy;
            java.lang.Object redisAuditEnabled;
            java.lang.Object redisAuditPolicySetting;
            java.lang.Object redisAuditTiEnabled;
            java.lang.Object redisAuditTtl;
            java.lang.Object redisSyncEnabled;
            java.lang.Object redisSyncTtl;
            java.lang.Object sasCrackEnabled;
            java.lang.Object sasDnsEnabled;
            java.lang.Object sasHttpEnabled;
            java.lang.Object sasLocalDnsEnabled;
            java.lang.Object sasLoginEnabled;
            java.lang.Object sasNetworkEnabled;
            java.lang.Object sasProcessEnabled;
            java.lang.Object sasSecurityAlertEnabled;
            java.lang.Object sasSecurityHcEnabled;
            java.lang.Object sasSecurityVulEnabled;
            java.lang.Object sasSessionEnabled;
            java.lang.Object sasSnapshotAccountEnabled;
            java.lang.Object sasSnapshotPortEnabled;
            java.lang.Object sasSnapshotProcessEnabled;
            java.lang.Object sasTiEnabled;
            java.lang.Object sasTtl;
            java.lang.Object slbAccessCollectionPolicy;
            java.lang.Object slbAccessEnabled;
            java.lang.Object slbAccessPolicySetting;
            java.lang.Object slbAccessTiEnabled;
            java.lang.Object slbAccessTtl;
            java.lang.Object slbSyncEnabled;
            java.lang.Object slbSyncTtl;
            java.lang.Object wafAccessCollectionPolicy;
            java.lang.Object wafAccessPolicySetting;
            java.lang.Object wafEnabled;
            java.lang.Object wafTiEnabled;
            java.lang.Object wafTtl;

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailEnabled}
             * @param actiontrailEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailEnabled(java.lang.Boolean actiontrailEnabled) {
                this.actiontrailEnabled = actiontrailEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailEnabled}
             * @param actiontrailEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailEnabled(com.aliyun.ros.cdk.core.IResolvable actiontrailEnabled) {
                this.actiontrailEnabled = actiontrailEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailOpenapiCollectionPolicy}
             * @param actiontrailOpenapiCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailOpenapiCollectionPolicy(java.lang.String actiontrailOpenapiCollectionPolicy) {
                this.actiontrailOpenapiCollectionPolicy = actiontrailOpenapiCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailOpenapiCollectionPolicy}
             * @param actiontrailOpenapiCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailOpenapiCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable actiontrailOpenapiCollectionPolicy) {
                this.actiontrailOpenapiCollectionPolicy = actiontrailOpenapiCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailOpenapiPolicySetting}
             * @param actiontrailOpenapiPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailOpenapiPolicySetting(java.util.List<? extends java.lang.Object> actiontrailOpenapiPolicySetting) {
                this.actiontrailOpenapiPolicySetting = actiontrailOpenapiPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailOpenapiPolicySetting}
             * @param actiontrailOpenapiPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailOpenapiPolicySetting(com.aliyun.ros.cdk.core.IResolvable actiontrailOpenapiPolicySetting) {
                this.actiontrailOpenapiPolicySetting = actiontrailOpenapiPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailTiEnabled}
             * @param actiontrailTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailTiEnabled(java.lang.Boolean actiontrailTiEnabled) {
                this.actiontrailTiEnabled = actiontrailTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailTiEnabled}
             * @param actiontrailTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailTiEnabled(com.aliyun.ros.cdk.core.IResolvable actiontrailTiEnabled) {
                this.actiontrailTiEnabled = actiontrailTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailTtl}
             * @param actiontrailTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailTtl(java.lang.Number actiontrailTtl) {
                this.actiontrailTtl = actiontrailTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getActiontrailTtl}
             * @param actiontrailTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actiontrailTtl(com.aliyun.ros.cdk.core.IResolvable actiontrailTtl) {
                this.actiontrailTtl = actiontrailTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayAccessCollectionPolicy}
             * @param apigatewayAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayAccessCollectionPolicy(java.lang.String apigatewayAccessCollectionPolicy) {
                this.apigatewayAccessCollectionPolicy = apigatewayAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayAccessCollectionPolicy}
             * @param apigatewayAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayAccessCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable apigatewayAccessCollectionPolicy) {
                this.apigatewayAccessCollectionPolicy = apigatewayAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayAccessPolicySetting}
             * @param apigatewayAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayAccessPolicySetting(java.util.List<? extends java.lang.Object> apigatewayAccessPolicySetting) {
                this.apigatewayAccessPolicySetting = apigatewayAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayAccessPolicySetting}
             * @param apigatewayAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayAccessPolicySetting(com.aliyun.ros.cdk.core.IResolvable apigatewayAccessPolicySetting) {
                this.apigatewayAccessPolicySetting = apigatewayAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayEnabled}
             * @param apigatewayEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayEnabled(java.lang.Boolean apigatewayEnabled) {
                this.apigatewayEnabled = apigatewayEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayEnabled}
             * @param apigatewayEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayEnabled(com.aliyun.ros.cdk.core.IResolvable apigatewayEnabled) {
                this.apigatewayEnabled = apigatewayEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayTiEnabled}
             * @param apigatewayTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayTiEnabled(java.lang.Boolean apigatewayTiEnabled) {
                this.apigatewayTiEnabled = apigatewayTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayTiEnabled}
             * @param apigatewayTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayTiEnabled(com.aliyun.ros.cdk.core.IResolvable apigatewayTiEnabled) {
                this.apigatewayTiEnabled = apigatewayTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayTtl}
             * @param apigatewayTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayTtl(java.lang.Number apigatewayTtl) {
                this.apigatewayTtl = apigatewayTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getApigatewayTtl}
             * @param apigatewayTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apigatewayTtl(com.aliyun.ros.cdk.core.IResolvable apigatewayTtl) {
                this.apigatewayTtl = apigatewayTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectEnabled}
             * @param appconnectEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectEnabled(java.lang.Boolean appconnectEnabled) {
                this.appconnectEnabled = appconnectEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectEnabled}
             * @param appconnectEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectEnabled(com.aliyun.ros.cdk.core.IResolvable appconnectEnabled) {
                this.appconnectEnabled = appconnectEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectOpCollectionPolicy}
             * @param appconnectOpCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectOpCollectionPolicy(java.lang.String appconnectOpCollectionPolicy) {
                this.appconnectOpCollectionPolicy = appconnectOpCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectOpCollectionPolicy}
             * @param appconnectOpCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectOpCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable appconnectOpCollectionPolicy) {
                this.appconnectOpCollectionPolicy = appconnectOpCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectOpPolicySetting}
             * @param appconnectOpPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectOpPolicySetting(java.util.List<? extends java.lang.Object> appconnectOpPolicySetting) {
                this.appconnectOpPolicySetting = appconnectOpPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectOpPolicySetting}
             * @param appconnectOpPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectOpPolicySetting(com.aliyun.ros.cdk.core.IResolvable appconnectOpPolicySetting) {
                this.appconnectOpPolicySetting = appconnectOpPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectTiEnabled}
             * @param appconnectTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectTiEnabled(java.lang.Boolean appconnectTiEnabled) {
                this.appconnectTiEnabled = appconnectTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectTiEnabled}
             * @param appconnectTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectTiEnabled(com.aliyun.ros.cdk.core.IResolvable appconnectTiEnabled) {
                this.appconnectTiEnabled = appconnectTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectTtl}
             * @param appconnectTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectTtl(java.lang.Number appconnectTtl) {
                this.appconnectTtl = appconnectTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getAppconnectTtl}
             * @param appconnectTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appconnectTtl(com.aliyun.ros.cdk.core.IResolvable appconnectTtl) {
                this.appconnectTtl = appconnectTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionAuditCollectionPolicy}
             * @param bastionAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionAuditCollectionPolicy(java.lang.String bastionAuditCollectionPolicy) {
                this.bastionAuditCollectionPolicy = bastionAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionAuditCollectionPolicy}
             * @param bastionAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionAuditCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable bastionAuditCollectionPolicy) {
                this.bastionAuditCollectionPolicy = bastionAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionAuditPolicySetting}
             * @param bastionAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionAuditPolicySetting(java.util.List<? extends java.lang.Object> bastionAuditPolicySetting) {
                this.bastionAuditPolicySetting = bastionAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionAuditPolicySetting}
             * @param bastionAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionAuditPolicySetting(com.aliyun.ros.cdk.core.IResolvable bastionAuditPolicySetting) {
                this.bastionAuditPolicySetting = bastionAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionEnabled}
             * @param bastionEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionEnabled(java.lang.Boolean bastionEnabled) {
                this.bastionEnabled = bastionEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionEnabled}
             * @param bastionEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionEnabled(com.aliyun.ros.cdk.core.IResolvable bastionEnabled) {
                this.bastionEnabled = bastionEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionTiEnabled}
             * @param bastionTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionTiEnabled(java.lang.Boolean bastionTiEnabled) {
                this.bastionTiEnabled = bastionTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionTiEnabled}
             * @param bastionTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionTiEnabled(com.aliyun.ros.cdk.core.IResolvable bastionTiEnabled) {
                this.bastionTiEnabled = bastionTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionTtl}
             * @param bastionTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionTtl(java.lang.Number bastionTtl) {
                this.bastionTtl = bastionTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getBastionTtl}
             * @param bastionTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bastionTtl(com.aliyun.ros.cdk.core.IResolvable bastionTtl) {
                this.bastionTtl = bastionTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallAccessCollectionPolicy}
             * @param cloudfirewallAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallAccessCollectionPolicy(java.lang.String cloudfirewallAccessCollectionPolicy) {
                this.cloudfirewallAccessCollectionPolicy = cloudfirewallAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallAccessCollectionPolicy}
             * @param cloudfirewallAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallAccessCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable cloudfirewallAccessCollectionPolicy) {
                this.cloudfirewallAccessCollectionPolicy = cloudfirewallAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallAccessPolicySetting}
             * @param cloudfirewallAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallAccessPolicySetting(java.util.List<? extends java.lang.Object> cloudfirewallAccessPolicySetting) {
                this.cloudfirewallAccessPolicySetting = cloudfirewallAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallAccessPolicySetting}
             * @param cloudfirewallAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallAccessPolicySetting(com.aliyun.ros.cdk.core.IResolvable cloudfirewallAccessPolicySetting) {
                this.cloudfirewallAccessPolicySetting = cloudfirewallAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallEnabled}
             * @param cloudfirewallEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallEnabled(java.lang.Boolean cloudfirewallEnabled) {
                this.cloudfirewallEnabled = cloudfirewallEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallEnabled}
             * @param cloudfirewallEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallEnabled(com.aliyun.ros.cdk.core.IResolvable cloudfirewallEnabled) {
                this.cloudfirewallEnabled = cloudfirewallEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallTiEnabled}
             * @param cloudfirewallTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallTiEnabled(java.lang.Boolean cloudfirewallTiEnabled) {
                this.cloudfirewallTiEnabled = cloudfirewallTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallTiEnabled}
             * @param cloudfirewallTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallTiEnabled(com.aliyun.ros.cdk.core.IResolvable cloudfirewallTiEnabled) {
                this.cloudfirewallTiEnabled = cloudfirewallTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallTtl}
             * @param cloudfirewallTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallTtl(java.lang.Number cloudfirewallTtl) {
                this.cloudfirewallTtl = cloudfirewallTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCloudfirewallTtl}
             * @param cloudfirewallTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cloudfirewallTtl(com.aliyun.ros.cdk.core.IResolvable cloudfirewallTtl) {
                this.cloudfirewallTtl = cloudfirewallTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsCallbackCollectionPolicy}
             * @param cpsCallbackCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsCallbackCollectionPolicy(java.lang.String cpsCallbackCollectionPolicy) {
                this.cpsCallbackCollectionPolicy = cpsCallbackCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsCallbackCollectionPolicy}
             * @param cpsCallbackCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsCallbackCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable cpsCallbackCollectionPolicy) {
                this.cpsCallbackCollectionPolicy = cpsCallbackCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsCallbackPolicySetting}
             * @param cpsCallbackPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsCallbackPolicySetting(java.util.List<? extends java.lang.Object> cpsCallbackPolicySetting) {
                this.cpsCallbackPolicySetting = cpsCallbackPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsCallbackPolicySetting}
             * @param cpsCallbackPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsCallbackPolicySetting(com.aliyun.ros.cdk.core.IResolvable cpsCallbackPolicySetting) {
                this.cpsCallbackPolicySetting = cpsCallbackPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsEnabled}
             * @param cpsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsEnabled(java.lang.Boolean cpsEnabled) {
                this.cpsEnabled = cpsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsEnabled}
             * @param cpsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsEnabled(com.aliyun.ros.cdk.core.IResolvable cpsEnabled) {
                this.cpsEnabled = cpsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsTiEnabled}
             * @param cpsTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsTiEnabled(java.lang.Boolean cpsTiEnabled) {
                this.cpsTiEnabled = cpsTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsTiEnabled}
             * @param cpsTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsTiEnabled(com.aliyun.ros.cdk.core.IResolvable cpsTiEnabled) {
                this.cpsTiEnabled = cpsTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsTtl}
             * @param cpsTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsTtl(java.lang.Number cpsTtl) {
                this.cpsTtl = cpsTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getCpsTtl}
             * @param cpsTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpsTtl(com.aliyun.ros.cdk.core.IResolvable cpsTtl) {
                this.cpsTtl = cpsTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessCollectionPolicy}
             * @param ddosCooAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessCollectionPolicy(java.lang.String ddosCooAccessCollectionPolicy) {
                this.ddosCooAccessCollectionPolicy = ddosCooAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessCollectionPolicy}
             * @param ddosCooAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable ddosCooAccessCollectionPolicy) {
                this.ddosCooAccessCollectionPolicy = ddosCooAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessEnabled}
             * @param ddosCooAccessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessEnabled(java.lang.Boolean ddosCooAccessEnabled) {
                this.ddosCooAccessEnabled = ddosCooAccessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessEnabled}
             * @param ddosCooAccessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessEnabled(com.aliyun.ros.cdk.core.IResolvable ddosCooAccessEnabled) {
                this.ddosCooAccessEnabled = ddosCooAccessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessPolicySetting}
             * @param ddosCooAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessPolicySetting(java.util.List<? extends java.lang.Object> ddosCooAccessPolicySetting) {
                this.ddosCooAccessPolicySetting = ddosCooAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessPolicySetting}
             * @param ddosCooAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessPolicySetting(com.aliyun.ros.cdk.core.IResolvable ddosCooAccessPolicySetting) {
                this.ddosCooAccessPolicySetting = ddosCooAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessTiEnabled}
             * @param ddosCooAccessTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessTiEnabled(java.lang.Boolean ddosCooAccessTiEnabled) {
                this.ddosCooAccessTiEnabled = ddosCooAccessTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessTiEnabled}
             * @param ddosCooAccessTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessTiEnabled(com.aliyun.ros.cdk.core.IResolvable ddosCooAccessTiEnabled) {
                this.ddosCooAccessTiEnabled = ddosCooAccessTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessTtl}
             * @param ddosCooAccessTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessTtl(java.lang.Number ddosCooAccessTtl) {
                this.ddosCooAccessTtl = ddosCooAccessTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDdosCooAccessTtl}
             * @param ddosCooAccessTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddosCooAccessTtl(com.aliyun.ros.cdk.core.IResolvable ddosCooAccessTtl) {
                this.ddosCooAccessTtl = ddosCooAccessTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditCollectionPolicy}
             * @param drdsAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditCollectionPolicy(java.lang.String drdsAuditCollectionPolicy) {
                this.drdsAuditCollectionPolicy = drdsAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditCollectionPolicy}
             * @param drdsAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable drdsAuditCollectionPolicy) {
                this.drdsAuditCollectionPolicy = drdsAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditEnabled}
             * @param drdsAuditEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditEnabled(java.lang.Boolean drdsAuditEnabled) {
                this.drdsAuditEnabled = drdsAuditEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditEnabled}
             * @param drdsAuditEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditEnabled(com.aliyun.ros.cdk.core.IResolvable drdsAuditEnabled) {
                this.drdsAuditEnabled = drdsAuditEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditPolicySetting}
             * @param drdsAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditPolicySetting(java.util.List<? extends java.lang.Object> drdsAuditPolicySetting) {
                this.drdsAuditPolicySetting = drdsAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditPolicySetting}
             * @param drdsAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditPolicySetting(com.aliyun.ros.cdk.core.IResolvable drdsAuditPolicySetting) {
                this.drdsAuditPolicySetting = drdsAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditTiEnabled}
             * @param drdsAuditTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditTiEnabled(java.lang.Boolean drdsAuditTiEnabled) {
                this.drdsAuditTiEnabled = drdsAuditTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditTiEnabled}
             * @param drdsAuditTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditTiEnabled(com.aliyun.ros.cdk.core.IResolvable drdsAuditTiEnabled) {
                this.drdsAuditTiEnabled = drdsAuditTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditTtl}
             * @param drdsAuditTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditTtl(java.lang.Number drdsAuditTtl) {
                this.drdsAuditTtl = drdsAuditTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsAuditTtl}
             * @param drdsAuditTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsAuditTtl(com.aliyun.ros.cdk.core.IResolvable drdsAuditTtl) {
                this.drdsAuditTtl = drdsAuditTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsSyncEnabled}
             * @param drdsSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsSyncEnabled(java.lang.Boolean drdsSyncEnabled) {
                this.drdsSyncEnabled = drdsSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsSyncEnabled}
             * @param drdsSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsSyncEnabled(com.aliyun.ros.cdk.core.IResolvable drdsSyncEnabled) {
                this.drdsSyncEnabled = drdsSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsSyncTtl}
             * @param drdsSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsSyncTtl(java.lang.Number drdsSyncTtl) {
                this.drdsSyncTtl = drdsSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getDrdsSyncTtl}
             * @param drdsSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder drdsSyncTtl(com.aliyun.ros.cdk.core.IResolvable drdsSyncTtl) {
                this.drdsSyncTtl = drdsSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditCollectionPolicy}
             * @param k8SAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditCollectionPolicy(java.lang.String k8SAuditCollectionPolicy) {
                this.k8SAuditCollectionPolicy = k8SAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditCollectionPolicy}
             * @param k8SAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable k8SAuditCollectionPolicy) {
                this.k8SAuditCollectionPolicy = k8SAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditEnabled}
             * @param k8SAuditEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditEnabled(java.lang.Boolean k8SAuditEnabled) {
                this.k8SAuditEnabled = k8SAuditEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditEnabled}
             * @param k8SAuditEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditEnabled(com.aliyun.ros.cdk.core.IResolvable k8SAuditEnabled) {
                this.k8SAuditEnabled = k8SAuditEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditPolicySetting}
             * @param k8SAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditPolicySetting(java.util.List<? extends java.lang.Object> k8SAuditPolicySetting) {
                this.k8SAuditPolicySetting = k8SAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditPolicySetting}
             * @param k8SAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditPolicySetting(com.aliyun.ros.cdk.core.IResolvable k8SAuditPolicySetting) {
                this.k8SAuditPolicySetting = k8SAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditTiEnabled}
             * @param k8SAuditTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditTiEnabled(java.lang.Boolean k8SAuditTiEnabled) {
                this.k8SAuditTiEnabled = k8SAuditTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditTiEnabled}
             * @param k8SAuditTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditTiEnabled(com.aliyun.ros.cdk.core.IResolvable k8SAuditTiEnabled) {
                this.k8SAuditTiEnabled = k8SAuditTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditTtl}
             * @param k8SAuditTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditTtl(java.lang.Number k8SAuditTtl) {
                this.k8SAuditTtl = k8SAuditTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SAuditTtl}
             * @param k8SAuditTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SAuditTtl(com.aliyun.ros.cdk.core.IResolvable k8SAuditTtl) {
                this.k8SAuditTtl = k8SAuditTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventCollectionPolicy}
             * @param k8SEventCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventCollectionPolicy(java.lang.String k8SEventCollectionPolicy) {
                this.k8SEventCollectionPolicy = k8SEventCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventCollectionPolicy}
             * @param k8SEventCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable k8SEventCollectionPolicy) {
                this.k8SEventCollectionPolicy = k8SEventCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventEnabled}
             * @param k8SEventEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventEnabled(java.lang.Boolean k8SEventEnabled) {
                this.k8SEventEnabled = k8SEventEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventEnabled}
             * @param k8SEventEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventEnabled(com.aliyun.ros.cdk.core.IResolvable k8SEventEnabled) {
                this.k8SEventEnabled = k8SEventEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventPolicySetting}
             * @param k8SEventPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventPolicySetting(java.util.List<? extends java.lang.Object> k8SEventPolicySetting) {
                this.k8SEventPolicySetting = k8SEventPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventPolicySetting}
             * @param k8SEventPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventPolicySetting(com.aliyun.ros.cdk.core.IResolvable k8SEventPolicySetting) {
                this.k8SEventPolicySetting = k8SEventPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventTiEnabled}
             * @param k8SEventTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventTiEnabled(java.lang.Boolean k8SEventTiEnabled) {
                this.k8SEventTiEnabled = k8SEventTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventTiEnabled}
             * @param k8SEventTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventTiEnabled(com.aliyun.ros.cdk.core.IResolvable k8SEventTiEnabled) {
                this.k8SEventTiEnabled = k8SEventTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventTtl}
             * @param k8SEventTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventTtl(java.lang.Number k8SEventTtl) {
                this.k8SEventTtl = k8SEventTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SEventTtl}
             * @param k8SEventTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SEventTtl(com.aliyun.ros.cdk.core.IResolvable k8SEventTtl) {
                this.k8SEventTtl = k8SEventTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressCollectionPolicy}
             * @param k8SIngressCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressCollectionPolicy(java.lang.String k8SIngressCollectionPolicy) {
                this.k8SIngressCollectionPolicy = k8SIngressCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressCollectionPolicy}
             * @param k8SIngressCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable k8SIngressCollectionPolicy) {
                this.k8SIngressCollectionPolicy = k8SIngressCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressEnabled}
             * @param k8SIngressEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressEnabled(java.lang.Boolean k8SIngressEnabled) {
                this.k8SIngressEnabled = k8SIngressEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressEnabled}
             * @param k8SIngressEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressEnabled(com.aliyun.ros.cdk.core.IResolvable k8SIngressEnabled) {
                this.k8SIngressEnabled = k8SIngressEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressPolicySetting}
             * @param k8SIngressPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressPolicySetting(java.util.List<? extends java.lang.Object> k8SIngressPolicySetting) {
                this.k8SIngressPolicySetting = k8SIngressPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressPolicySetting}
             * @param k8SIngressPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressPolicySetting(com.aliyun.ros.cdk.core.IResolvable k8SIngressPolicySetting) {
                this.k8SIngressPolicySetting = k8SIngressPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressTiEnabled}
             * @param k8SIngressTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressTiEnabled(java.lang.Boolean k8SIngressTiEnabled) {
                this.k8SIngressTiEnabled = k8SIngressTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressTiEnabled}
             * @param k8SIngressTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressTiEnabled(com.aliyun.ros.cdk.core.IResolvable k8SIngressTiEnabled) {
                this.k8SIngressTiEnabled = k8SIngressTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressTtl}
             * @param k8SIngressTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressTtl(java.lang.Number k8SIngressTtl) {
                this.k8SIngressTtl = k8SIngressTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getK8SIngressTtl}
             * @param k8SIngressTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k8SIngressTtl(com.aliyun.ros.cdk.core.IResolvable k8SIngressTtl) {
                this.k8SIngressTtl = k8SIngressTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasAuditCollectionPolicy}
             * @param nasAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasAuditCollectionPolicy(java.lang.String nasAuditCollectionPolicy) {
                this.nasAuditCollectionPolicy = nasAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasAuditCollectionPolicy}
             * @param nasAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasAuditCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable nasAuditCollectionPolicy) {
                this.nasAuditCollectionPolicy = nasAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasAuditPolicySetting}
             * @param nasAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasAuditPolicySetting(java.util.List<? extends java.lang.Object> nasAuditPolicySetting) {
                this.nasAuditPolicySetting = nasAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasAuditPolicySetting}
             * @param nasAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasAuditPolicySetting(com.aliyun.ros.cdk.core.IResolvable nasAuditPolicySetting) {
                this.nasAuditPolicySetting = nasAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasEnabled}
             * @param nasEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasEnabled(java.lang.Boolean nasEnabled) {
                this.nasEnabled = nasEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasEnabled}
             * @param nasEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasEnabled(com.aliyun.ros.cdk.core.IResolvable nasEnabled) {
                this.nasEnabled = nasEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasTiEnabled}
             * @param nasTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasTiEnabled(java.lang.Boolean nasTiEnabled) {
                this.nasTiEnabled = nasTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasTiEnabled}
             * @param nasTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasTiEnabled(com.aliyun.ros.cdk.core.IResolvable nasTiEnabled) {
                this.nasTiEnabled = nasTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasTtl}
             * @param nasTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasTtl(java.lang.Number nasTtl) {
                this.nasTtl = nasTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getNasTtl}
             * @param nasTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasTtl(com.aliyun.ros.cdk.core.IResolvable nasTtl) {
                this.nasTtl = nasTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessCollectionPolicy}
             * @param ossAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessCollectionPolicy(java.lang.String ossAccessCollectionPolicy) {
                this.ossAccessCollectionPolicy = ossAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessCollectionPolicy}
             * @param ossAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable ossAccessCollectionPolicy) {
                this.ossAccessCollectionPolicy = ossAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessEnabled}
             * @param ossAccessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessEnabled(java.lang.Boolean ossAccessEnabled) {
                this.ossAccessEnabled = ossAccessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessEnabled}
             * @param ossAccessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessEnabled(com.aliyun.ros.cdk.core.IResolvable ossAccessEnabled) {
                this.ossAccessEnabled = ossAccessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessPolicySetting}
             * @param ossAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessPolicySetting(java.util.List<? extends java.lang.Object> ossAccessPolicySetting) {
                this.ossAccessPolicySetting = ossAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessPolicySetting}
             * @param ossAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessPolicySetting(com.aliyun.ros.cdk.core.IResolvable ossAccessPolicySetting) {
                this.ossAccessPolicySetting = ossAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessTiEnabled}
             * @param ossAccessTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessTiEnabled(java.lang.Boolean ossAccessTiEnabled) {
                this.ossAccessTiEnabled = ossAccessTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessTiEnabled}
             * @param ossAccessTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessTiEnabled(com.aliyun.ros.cdk.core.IResolvable ossAccessTiEnabled) {
                this.ossAccessTiEnabled = ossAccessTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessTtl}
             * @param ossAccessTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessTtl(java.lang.Number ossAccessTtl) {
                this.ossAccessTtl = ossAccessTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssAccessTtl}
             * @param ossAccessTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossAccessTtl(com.aliyun.ros.cdk.core.IResolvable ossAccessTtl) {
                this.ossAccessTtl = ossAccessTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringCollectionPolicy}
             * @param ossMeteringCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringCollectionPolicy(java.lang.String ossMeteringCollectionPolicy) {
                this.ossMeteringCollectionPolicy = ossMeteringCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringCollectionPolicy}
             * @param ossMeteringCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable ossMeteringCollectionPolicy) {
                this.ossMeteringCollectionPolicy = ossMeteringCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringEnabled}
             * @param ossMeteringEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringEnabled(java.lang.Boolean ossMeteringEnabled) {
                this.ossMeteringEnabled = ossMeteringEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringEnabled}
             * @param ossMeteringEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringEnabled(com.aliyun.ros.cdk.core.IResolvable ossMeteringEnabled) {
                this.ossMeteringEnabled = ossMeteringEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringPolicySetting}
             * @param ossMeteringPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringPolicySetting(java.util.List<? extends java.lang.Object> ossMeteringPolicySetting) {
                this.ossMeteringPolicySetting = ossMeteringPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringPolicySetting}
             * @param ossMeteringPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringPolicySetting(com.aliyun.ros.cdk.core.IResolvable ossMeteringPolicySetting) {
                this.ossMeteringPolicySetting = ossMeteringPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringTiEnabled}
             * @param ossMeteringTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringTiEnabled(java.lang.Boolean ossMeteringTiEnabled) {
                this.ossMeteringTiEnabled = ossMeteringTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringTiEnabled}
             * @param ossMeteringTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringTiEnabled(com.aliyun.ros.cdk.core.IResolvable ossMeteringTiEnabled) {
                this.ossMeteringTiEnabled = ossMeteringTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringTtl}
             * @param ossMeteringTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringTtl(java.lang.Number ossMeteringTtl) {
                this.ossMeteringTtl = ossMeteringTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssMeteringTtl}
             * @param ossMeteringTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossMeteringTtl(com.aliyun.ros.cdk.core.IResolvable ossMeteringTtl) {
                this.ossMeteringTtl = ossMeteringTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssSyncEnabled}
             * @param ossSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossSyncEnabled(java.lang.Boolean ossSyncEnabled) {
                this.ossSyncEnabled = ossSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssSyncEnabled}
             * @param ossSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossSyncEnabled(com.aliyun.ros.cdk.core.IResolvable ossSyncEnabled) {
                this.ossSyncEnabled = ossSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssSyncTtl}
             * @param ossSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossSyncTtl(java.lang.Number ossSyncTtl) {
                this.ossSyncTtl = ossSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getOssSyncTtl}
             * @param ossSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossSyncTtl(com.aliyun.ros.cdk.core.IResolvable ossSyncTtl) {
                this.ossSyncTtl = ossSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbAuditCollectionPolicy}
             * @param polardbAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbAuditCollectionPolicy(java.lang.String polardbAuditCollectionPolicy) {
                this.polardbAuditCollectionPolicy = polardbAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbAuditCollectionPolicy}
             * @param polardbAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbAuditCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable polardbAuditCollectionPolicy) {
                this.polardbAuditCollectionPolicy = polardbAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbAuditPolicySetting}
             * @param polardbAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbAuditPolicySetting(java.util.List<? extends java.lang.Object> polardbAuditPolicySetting) {
                this.polardbAuditPolicySetting = polardbAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbAuditPolicySetting}
             * @param polardbAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbAuditPolicySetting(com.aliyun.ros.cdk.core.IResolvable polardbAuditPolicySetting) {
                this.polardbAuditPolicySetting = polardbAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbEnabled}
             * @param polardbEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbEnabled(java.lang.Boolean polardbEnabled) {
                this.polardbEnabled = polardbEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbEnabled}
             * @param polardbEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbEnabled(com.aliyun.ros.cdk.core.IResolvable polardbEnabled) {
                this.polardbEnabled = polardbEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfCollectionPolicy}
             * @param polardbPerfCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfCollectionPolicy(java.lang.String polardbPerfCollectionPolicy) {
                this.polardbPerfCollectionPolicy = polardbPerfCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfCollectionPolicy}
             * @param polardbPerfCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable polardbPerfCollectionPolicy) {
                this.polardbPerfCollectionPolicy = polardbPerfCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfEnabled}
             * @param polardbPerfEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfEnabled(java.lang.Boolean polardbPerfEnabled) {
                this.polardbPerfEnabled = polardbPerfEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfEnabled}
             * @param polardbPerfEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfEnabled(com.aliyun.ros.cdk.core.IResolvable polardbPerfEnabled) {
                this.polardbPerfEnabled = polardbPerfEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfPolicySetting}
             * @param polardbPerfPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfPolicySetting(java.util.List<? extends java.lang.Object> polardbPerfPolicySetting) {
                this.polardbPerfPolicySetting = polardbPerfPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfPolicySetting}
             * @param polardbPerfPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfPolicySetting(com.aliyun.ros.cdk.core.IResolvable polardbPerfPolicySetting) {
                this.polardbPerfPolicySetting = polardbPerfPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfTiEnabled}
             * @param polardbPerfTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfTiEnabled(java.lang.Boolean polardbPerfTiEnabled) {
                this.polardbPerfTiEnabled = polardbPerfTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfTiEnabled}
             * @param polardbPerfTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfTiEnabled(com.aliyun.ros.cdk.core.IResolvable polardbPerfTiEnabled) {
                this.polardbPerfTiEnabled = polardbPerfTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfTtl}
             * @param polardbPerfTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfTtl(java.lang.Number polardbPerfTtl) {
                this.polardbPerfTtl = polardbPerfTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbPerfTtl}
             * @param polardbPerfTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbPerfTtl(com.aliyun.ros.cdk.core.IResolvable polardbPerfTtl) {
                this.polardbPerfTtl = polardbPerfTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowCollectionPolicy}
             * @param polardbSlowCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowCollectionPolicy(java.lang.String polardbSlowCollectionPolicy) {
                this.polardbSlowCollectionPolicy = polardbSlowCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowCollectionPolicy}
             * @param polardbSlowCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable polardbSlowCollectionPolicy) {
                this.polardbSlowCollectionPolicy = polardbSlowCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowEnabled}
             * @param polardbSlowEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowEnabled(java.lang.Boolean polardbSlowEnabled) {
                this.polardbSlowEnabled = polardbSlowEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowEnabled}
             * @param polardbSlowEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowEnabled(com.aliyun.ros.cdk.core.IResolvable polardbSlowEnabled) {
                this.polardbSlowEnabled = polardbSlowEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowPolicySetting}
             * @param polardbSlowPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowPolicySetting(java.util.List<? extends java.lang.Object> polardbSlowPolicySetting) {
                this.polardbSlowPolicySetting = polardbSlowPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowPolicySetting}
             * @param polardbSlowPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowPolicySetting(com.aliyun.ros.cdk.core.IResolvable polardbSlowPolicySetting) {
                this.polardbSlowPolicySetting = polardbSlowPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowTiEnabled}
             * @param polardbSlowTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowTiEnabled(java.lang.Boolean polardbSlowTiEnabled) {
                this.polardbSlowTiEnabled = polardbSlowTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowTiEnabled}
             * @param polardbSlowTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowTiEnabled(com.aliyun.ros.cdk.core.IResolvable polardbSlowTiEnabled) {
                this.polardbSlowTiEnabled = polardbSlowTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowTtl}
             * @param polardbSlowTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowTtl(java.lang.Number polardbSlowTtl) {
                this.polardbSlowTtl = polardbSlowTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbSlowTtl}
             * @param polardbSlowTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbSlowTtl(com.aliyun.ros.cdk.core.IResolvable polardbSlowTtl) {
                this.polardbSlowTtl = polardbSlowTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbTiEnabled}
             * @param polardbTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbTiEnabled(java.lang.Boolean polardbTiEnabled) {
                this.polardbTiEnabled = polardbTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbTiEnabled}
             * @param polardbTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbTiEnabled(com.aliyun.ros.cdk.core.IResolvable polardbTiEnabled) {
                this.polardbTiEnabled = polardbTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbTtl}
             * @param polardbTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbTtl(java.lang.Number polardbTtl) {
                this.polardbTtl = polardbTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getPolardbTtl}
             * @param polardbTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder polardbTtl(com.aliyun.ros.cdk.core.IResolvable polardbTtl) {
                this.polardbTtl = polardbTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsAuditCollectionPolicy}
             * @param rdsAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsAuditCollectionPolicy(java.lang.String rdsAuditCollectionPolicy) {
                this.rdsAuditCollectionPolicy = rdsAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsAuditCollectionPolicy}
             * @param rdsAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsAuditCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable rdsAuditCollectionPolicy) {
                this.rdsAuditCollectionPolicy = rdsAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsAuditPolicySetting}
             * @param rdsAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsAuditPolicySetting(java.util.List<? extends java.lang.Object> rdsAuditPolicySetting) {
                this.rdsAuditPolicySetting = rdsAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsAuditPolicySetting}
             * @param rdsAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsAuditPolicySetting(com.aliyun.ros.cdk.core.IResolvable rdsAuditPolicySetting) {
                this.rdsAuditPolicySetting = rdsAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsEnabled}
             * @param rdsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsEnabled(java.lang.Boolean rdsEnabled) {
                this.rdsEnabled = rdsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsEnabled}
             * @param rdsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsEnabled(com.aliyun.ros.cdk.core.IResolvable rdsEnabled) {
                this.rdsEnabled = rdsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfCollectionPolicy}
             * @param rdsPerfCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfCollectionPolicy(java.lang.String rdsPerfCollectionPolicy) {
                this.rdsPerfCollectionPolicy = rdsPerfCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfCollectionPolicy}
             * @param rdsPerfCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable rdsPerfCollectionPolicy) {
                this.rdsPerfCollectionPolicy = rdsPerfCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfEnabled}
             * @param rdsPerfEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfEnabled(java.lang.Boolean rdsPerfEnabled) {
                this.rdsPerfEnabled = rdsPerfEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfEnabled}
             * @param rdsPerfEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfEnabled(com.aliyun.ros.cdk.core.IResolvable rdsPerfEnabled) {
                this.rdsPerfEnabled = rdsPerfEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfPolicySetting}
             * @param rdsPerfPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfPolicySetting(java.util.List<? extends java.lang.Object> rdsPerfPolicySetting) {
                this.rdsPerfPolicySetting = rdsPerfPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfPolicySetting}
             * @param rdsPerfPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfPolicySetting(com.aliyun.ros.cdk.core.IResolvable rdsPerfPolicySetting) {
                this.rdsPerfPolicySetting = rdsPerfPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfTiEnabled}
             * @param rdsPerfTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfTiEnabled(java.lang.Boolean rdsPerfTiEnabled) {
                this.rdsPerfTiEnabled = rdsPerfTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfTiEnabled}
             * @param rdsPerfTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfTiEnabled(com.aliyun.ros.cdk.core.IResolvable rdsPerfTiEnabled) {
                this.rdsPerfTiEnabled = rdsPerfTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfTtl}
             * @param rdsPerfTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfTtl(java.lang.Number rdsPerfTtl) {
                this.rdsPerfTtl = rdsPerfTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsPerfTtl}
             * @param rdsPerfTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsPerfTtl(com.aliyun.ros.cdk.core.IResolvable rdsPerfTtl) {
                this.rdsPerfTtl = rdsPerfTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowCollectionPolicy}
             * @param rdsSlowCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowCollectionPolicy(java.lang.String rdsSlowCollectionPolicy) {
                this.rdsSlowCollectionPolicy = rdsSlowCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowCollectionPolicy}
             * @param rdsSlowCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable rdsSlowCollectionPolicy) {
                this.rdsSlowCollectionPolicy = rdsSlowCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowEnabled}
             * @param rdsSlowEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowEnabled(java.lang.Boolean rdsSlowEnabled) {
                this.rdsSlowEnabled = rdsSlowEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowEnabled}
             * @param rdsSlowEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowEnabled(com.aliyun.ros.cdk.core.IResolvable rdsSlowEnabled) {
                this.rdsSlowEnabled = rdsSlowEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowPolicySetting}
             * @param rdsSlowPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowPolicySetting(java.util.List<? extends java.lang.Object> rdsSlowPolicySetting) {
                this.rdsSlowPolicySetting = rdsSlowPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowPolicySetting}
             * @param rdsSlowPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowPolicySetting(com.aliyun.ros.cdk.core.IResolvable rdsSlowPolicySetting) {
                this.rdsSlowPolicySetting = rdsSlowPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowTiEnabled}
             * @param rdsSlowTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowTiEnabled(java.lang.Boolean rdsSlowTiEnabled) {
                this.rdsSlowTiEnabled = rdsSlowTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowTiEnabled}
             * @param rdsSlowTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowTiEnabled(com.aliyun.ros.cdk.core.IResolvable rdsSlowTiEnabled) {
                this.rdsSlowTiEnabled = rdsSlowTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowTtl}
             * @param rdsSlowTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowTtl(java.lang.Number rdsSlowTtl) {
                this.rdsSlowTtl = rdsSlowTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsSlowTtl}
             * @param rdsSlowTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsSlowTtl(com.aliyun.ros.cdk.core.IResolvable rdsSlowTtl) {
                this.rdsSlowTtl = rdsSlowTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsTiEnabled}
             * @param rdsTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsTiEnabled(java.lang.Boolean rdsTiEnabled) {
                this.rdsTiEnabled = rdsTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsTiEnabled}
             * @param rdsTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsTiEnabled(com.aliyun.ros.cdk.core.IResolvable rdsTiEnabled) {
                this.rdsTiEnabled = rdsTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsTtl}
             * @param rdsTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsTtl(java.lang.Number rdsTtl) {
                this.rdsTtl = rdsTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRdsTtl}
             * @param rdsTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsTtl(com.aliyun.ros.cdk.core.IResolvable rdsTtl) {
                this.rdsTtl = rdsTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditCollectionPolicy}
             * @param redisAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditCollectionPolicy(java.lang.String redisAuditCollectionPolicy) {
                this.redisAuditCollectionPolicy = redisAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditCollectionPolicy}
             * @param redisAuditCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable redisAuditCollectionPolicy) {
                this.redisAuditCollectionPolicy = redisAuditCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditEnabled}
             * @param redisAuditEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditEnabled(java.lang.Boolean redisAuditEnabled) {
                this.redisAuditEnabled = redisAuditEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditEnabled}
             * @param redisAuditEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditEnabled(com.aliyun.ros.cdk.core.IResolvable redisAuditEnabled) {
                this.redisAuditEnabled = redisAuditEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditPolicySetting}
             * @param redisAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditPolicySetting(java.util.List<? extends java.lang.Object> redisAuditPolicySetting) {
                this.redisAuditPolicySetting = redisAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditPolicySetting}
             * @param redisAuditPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditPolicySetting(com.aliyun.ros.cdk.core.IResolvable redisAuditPolicySetting) {
                this.redisAuditPolicySetting = redisAuditPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditTiEnabled}
             * @param redisAuditTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditTiEnabled(java.lang.Boolean redisAuditTiEnabled) {
                this.redisAuditTiEnabled = redisAuditTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditTiEnabled}
             * @param redisAuditTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditTiEnabled(com.aliyun.ros.cdk.core.IResolvable redisAuditTiEnabled) {
                this.redisAuditTiEnabled = redisAuditTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditTtl}
             * @param redisAuditTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditTtl(java.lang.Number redisAuditTtl) {
                this.redisAuditTtl = redisAuditTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisAuditTtl}
             * @param redisAuditTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisAuditTtl(com.aliyun.ros.cdk.core.IResolvable redisAuditTtl) {
                this.redisAuditTtl = redisAuditTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisSyncEnabled}
             * @param redisSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisSyncEnabled(java.lang.Boolean redisSyncEnabled) {
                this.redisSyncEnabled = redisSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisSyncEnabled}
             * @param redisSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisSyncEnabled(com.aliyun.ros.cdk.core.IResolvable redisSyncEnabled) {
                this.redisSyncEnabled = redisSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisSyncTtl}
             * @param redisSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisSyncTtl(java.lang.Number redisSyncTtl) {
                this.redisSyncTtl = redisSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getRedisSyncTtl}
             * @param redisSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisSyncTtl(com.aliyun.ros.cdk.core.IResolvable redisSyncTtl) {
                this.redisSyncTtl = redisSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasCrackEnabled}
             * @param sasCrackEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasCrackEnabled(java.lang.Boolean sasCrackEnabled) {
                this.sasCrackEnabled = sasCrackEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasCrackEnabled}
             * @param sasCrackEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasCrackEnabled(com.aliyun.ros.cdk.core.IResolvable sasCrackEnabled) {
                this.sasCrackEnabled = sasCrackEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasDnsEnabled}
             * @param sasDnsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasDnsEnabled(java.lang.Boolean sasDnsEnabled) {
                this.sasDnsEnabled = sasDnsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasDnsEnabled}
             * @param sasDnsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasDnsEnabled(com.aliyun.ros.cdk.core.IResolvable sasDnsEnabled) {
                this.sasDnsEnabled = sasDnsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasHttpEnabled}
             * @param sasHttpEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasHttpEnabled(java.lang.Boolean sasHttpEnabled) {
                this.sasHttpEnabled = sasHttpEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasHttpEnabled}
             * @param sasHttpEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasHttpEnabled(com.aliyun.ros.cdk.core.IResolvable sasHttpEnabled) {
                this.sasHttpEnabled = sasHttpEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasLocalDnsEnabled}
             * @param sasLocalDnsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasLocalDnsEnabled(java.lang.Boolean sasLocalDnsEnabled) {
                this.sasLocalDnsEnabled = sasLocalDnsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasLocalDnsEnabled}
             * @param sasLocalDnsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasLocalDnsEnabled(com.aliyun.ros.cdk.core.IResolvable sasLocalDnsEnabled) {
                this.sasLocalDnsEnabled = sasLocalDnsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasLoginEnabled}
             * @param sasLoginEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasLoginEnabled(java.lang.Boolean sasLoginEnabled) {
                this.sasLoginEnabled = sasLoginEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasLoginEnabled}
             * @param sasLoginEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasLoginEnabled(com.aliyun.ros.cdk.core.IResolvable sasLoginEnabled) {
                this.sasLoginEnabled = sasLoginEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasNetworkEnabled}
             * @param sasNetworkEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasNetworkEnabled(java.lang.Boolean sasNetworkEnabled) {
                this.sasNetworkEnabled = sasNetworkEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasNetworkEnabled}
             * @param sasNetworkEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasNetworkEnabled(com.aliyun.ros.cdk.core.IResolvable sasNetworkEnabled) {
                this.sasNetworkEnabled = sasNetworkEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasProcessEnabled}
             * @param sasProcessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasProcessEnabled(java.lang.Boolean sasProcessEnabled) {
                this.sasProcessEnabled = sasProcessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasProcessEnabled}
             * @param sasProcessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasProcessEnabled(com.aliyun.ros.cdk.core.IResolvable sasProcessEnabled) {
                this.sasProcessEnabled = sasProcessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSecurityAlertEnabled}
             * @param sasSecurityAlertEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSecurityAlertEnabled(java.lang.Boolean sasSecurityAlertEnabled) {
                this.sasSecurityAlertEnabled = sasSecurityAlertEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSecurityAlertEnabled}
             * @param sasSecurityAlertEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSecurityAlertEnabled(com.aliyun.ros.cdk.core.IResolvable sasSecurityAlertEnabled) {
                this.sasSecurityAlertEnabled = sasSecurityAlertEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSecurityHcEnabled}
             * @param sasSecurityHcEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSecurityHcEnabled(java.lang.Boolean sasSecurityHcEnabled) {
                this.sasSecurityHcEnabled = sasSecurityHcEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSecurityHcEnabled}
             * @param sasSecurityHcEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSecurityHcEnabled(com.aliyun.ros.cdk.core.IResolvable sasSecurityHcEnabled) {
                this.sasSecurityHcEnabled = sasSecurityHcEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSecurityVulEnabled}
             * @param sasSecurityVulEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSecurityVulEnabled(java.lang.Boolean sasSecurityVulEnabled) {
                this.sasSecurityVulEnabled = sasSecurityVulEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSecurityVulEnabled}
             * @param sasSecurityVulEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSecurityVulEnabled(com.aliyun.ros.cdk.core.IResolvable sasSecurityVulEnabled) {
                this.sasSecurityVulEnabled = sasSecurityVulEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSessionEnabled}
             * @param sasSessionEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSessionEnabled(java.lang.Boolean sasSessionEnabled) {
                this.sasSessionEnabled = sasSessionEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSessionEnabled}
             * @param sasSessionEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSessionEnabled(com.aliyun.ros.cdk.core.IResolvable sasSessionEnabled) {
                this.sasSessionEnabled = sasSessionEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSnapshotAccountEnabled}
             * @param sasSnapshotAccountEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSnapshotAccountEnabled(java.lang.Boolean sasSnapshotAccountEnabled) {
                this.sasSnapshotAccountEnabled = sasSnapshotAccountEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSnapshotAccountEnabled}
             * @param sasSnapshotAccountEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSnapshotAccountEnabled(com.aliyun.ros.cdk.core.IResolvable sasSnapshotAccountEnabled) {
                this.sasSnapshotAccountEnabled = sasSnapshotAccountEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSnapshotPortEnabled}
             * @param sasSnapshotPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSnapshotPortEnabled(java.lang.Boolean sasSnapshotPortEnabled) {
                this.sasSnapshotPortEnabled = sasSnapshotPortEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSnapshotPortEnabled}
             * @param sasSnapshotPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSnapshotPortEnabled(com.aliyun.ros.cdk.core.IResolvable sasSnapshotPortEnabled) {
                this.sasSnapshotPortEnabled = sasSnapshotPortEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSnapshotProcessEnabled}
             * @param sasSnapshotProcessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSnapshotProcessEnabled(java.lang.Boolean sasSnapshotProcessEnabled) {
                this.sasSnapshotProcessEnabled = sasSnapshotProcessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasSnapshotProcessEnabled}
             * @param sasSnapshotProcessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasSnapshotProcessEnabled(com.aliyun.ros.cdk.core.IResolvable sasSnapshotProcessEnabled) {
                this.sasSnapshotProcessEnabled = sasSnapshotProcessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasTiEnabled}
             * @param sasTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasTiEnabled(java.lang.Boolean sasTiEnabled) {
                this.sasTiEnabled = sasTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasTiEnabled}
             * @param sasTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasTiEnabled(com.aliyun.ros.cdk.core.IResolvable sasTiEnabled) {
                this.sasTiEnabled = sasTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasTtl}
             * @param sasTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasTtl(java.lang.Number sasTtl) {
                this.sasTtl = sasTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSasTtl}
             * @param sasTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sasTtl(com.aliyun.ros.cdk.core.IResolvable sasTtl) {
                this.sasTtl = sasTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessCollectionPolicy}
             * @param slbAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessCollectionPolicy(java.lang.String slbAccessCollectionPolicy) {
                this.slbAccessCollectionPolicy = slbAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessCollectionPolicy}
             * @param slbAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable slbAccessCollectionPolicy) {
                this.slbAccessCollectionPolicy = slbAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessEnabled}
             * @param slbAccessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessEnabled(java.lang.Boolean slbAccessEnabled) {
                this.slbAccessEnabled = slbAccessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessEnabled}
             * @param slbAccessEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessEnabled(com.aliyun.ros.cdk.core.IResolvable slbAccessEnabled) {
                this.slbAccessEnabled = slbAccessEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessPolicySetting}
             * @param slbAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessPolicySetting(java.util.List<? extends java.lang.Object> slbAccessPolicySetting) {
                this.slbAccessPolicySetting = slbAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessPolicySetting}
             * @param slbAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessPolicySetting(com.aliyun.ros.cdk.core.IResolvable slbAccessPolicySetting) {
                this.slbAccessPolicySetting = slbAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessTiEnabled}
             * @param slbAccessTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessTiEnabled(java.lang.Boolean slbAccessTiEnabled) {
                this.slbAccessTiEnabled = slbAccessTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessTiEnabled}
             * @param slbAccessTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessTiEnabled(com.aliyun.ros.cdk.core.IResolvable slbAccessTiEnabled) {
                this.slbAccessTiEnabled = slbAccessTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessTtl}
             * @param slbAccessTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessTtl(java.lang.Number slbAccessTtl) {
                this.slbAccessTtl = slbAccessTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbAccessTtl}
             * @param slbAccessTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbAccessTtl(com.aliyun.ros.cdk.core.IResolvable slbAccessTtl) {
                this.slbAccessTtl = slbAccessTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbSyncEnabled}
             * @param slbSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbSyncEnabled(java.lang.Boolean slbSyncEnabled) {
                this.slbSyncEnabled = slbSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbSyncEnabled}
             * @param slbSyncEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbSyncEnabled(com.aliyun.ros.cdk.core.IResolvable slbSyncEnabled) {
                this.slbSyncEnabled = slbSyncEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbSyncTtl}
             * @param slbSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbSyncTtl(java.lang.Number slbSyncTtl) {
                this.slbSyncTtl = slbSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getSlbSyncTtl}
             * @param slbSyncTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbSyncTtl(com.aliyun.ros.cdk.core.IResolvable slbSyncTtl) {
                this.slbSyncTtl = slbSyncTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafAccessCollectionPolicy}
             * @param wafAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafAccessCollectionPolicy(java.lang.String wafAccessCollectionPolicy) {
                this.wafAccessCollectionPolicy = wafAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafAccessCollectionPolicy}
             * @param wafAccessCollectionPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafAccessCollectionPolicy(com.aliyun.ros.cdk.core.IResolvable wafAccessCollectionPolicy) {
                this.wafAccessCollectionPolicy = wafAccessCollectionPolicy;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafAccessPolicySetting}
             * @param wafAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafAccessPolicySetting(java.util.List<? extends java.lang.Object> wafAccessPolicySetting) {
                this.wafAccessPolicySetting = wafAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafAccessPolicySetting}
             * @param wafAccessPolicySetting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafAccessPolicySetting(com.aliyun.ros.cdk.core.IResolvable wafAccessPolicySetting) {
                this.wafAccessPolicySetting = wafAccessPolicySetting;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafEnabled}
             * @param wafEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafEnabled(java.lang.Boolean wafEnabled) {
                this.wafEnabled = wafEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafEnabled}
             * @param wafEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafEnabled(com.aliyun.ros.cdk.core.IResolvable wafEnabled) {
                this.wafEnabled = wafEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafTiEnabled}
             * @param wafTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafTiEnabled(java.lang.Boolean wafTiEnabled) {
                this.wafTiEnabled = wafTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafTiEnabled}
             * @param wafTiEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafTiEnabled(com.aliyun.ros.cdk.core.IResolvable wafTiEnabled) {
                this.wafTiEnabled = wafTiEnabled;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafTtl}
             * @param wafTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafTtl(java.lang.Number wafTtl) {
                this.wafTtl = wafTtl;
                return this;
            }

            /**
             * Sets the value of {@link VariableMapProperty#getWafTtl}
             * @param wafTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wafTtl(com.aliyun.ros.cdk.core.IResolvable wafTtl) {
                this.wafTtl = wafTtl;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VariableMapProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VariableMapProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VariableMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VariableMapProperty {
            private final java.lang.Object actiontrailEnabled;
            private final java.lang.Object actiontrailOpenapiCollectionPolicy;
            private final java.lang.Object actiontrailOpenapiPolicySetting;
            private final java.lang.Object actiontrailTiEnabled;
            private final java.lang.Object actiontrailTtl;
            private final java.lang.Object apigatewayAccessCollectionPolicy;
            private final java.lang.Object apigatewayAccessPolicySetting;
            private final java.lang.Object apigatewayEnabled;
            private final java.lang.Object apigatewayTiEnabled;
            private final java.lang.Object apigatewayTtl;
            private final java.lang.Object appconnectEnabled;
            private final java.lang.Object appconnectOpCollectionPolicy;
            private final java.lang.Object appconnectOpPolicySetting;
            private final java.lang.Object appconnectTiEnabled;
            private final java.lang.Object appconnectTtl;
            private final java.lang.Object bastionAuditCollectionPolicy;
            private final java.lang.Object bastionAuditPolicySetting;
            private final java.lang.Object bastionEnabled;
            private final java.lang.Object bastionTiEnabled;
            private final java.lang.Object bastionTtl;
            private final java.lang.Object cloudfirewallAccessCollectionPolicy;
            private final java.lang.Object cloudfirewallAccessPolicySetting;
            private final java.lang.Object cloudfirewallEnabled;
            private final java.lang.Object cloudfirewallTiEnabled;
            private final java.lang.Object cloudfirewallTtl;
            private final java.lang.Object cpsCallbackCollectionPolicy;
            private final java.lang.Object cpsCallbackPolicySetting;
            private final java.lang.Object cpsEnabled;
            private final java.lang.Object cpsTiEnabled;
            private final java.lang.Object cpsTtl;
            private final java.lang.Object ddosCooAccessCollectionPolicy;
            private final java.lang.Object ddosCooAccessEnabled;
            private final java.lang.Object ddosCooAccessPolicySetting;
            private final java.lang.Object ddosCooAccessTiEnabled;
            private final java.lang.Object ddosCooAccessTtl;
            private final java.lang.Object drdsAuditCollectionPolicy;
            private final java.lang.Object drdsAuditEnabled;
            private final java.lang.Object drdsAuditPolicySetting;
            private final java.lang.Object drdsAuditTiEnabled;
            private final java.lang.Object drdsAuditTtl;
            private final java.lang.Object drdsSyncEnabled;
            private final java.lang.Object drdsSyncTtl;
            private final java.lang.Object k8SAuditCollectionPolicy;
            private final java.lang.Object k8SAuditEnabled;
            private final java.lang.Object k8SAuditPolicySetting;
            private final java.lang.Object k8SAuditTiEnabled;
            private final java.lang.Object k8SAuditTtl;
            private final java.lang.Object k8SEventCollectionPolicy;
            private final java.lang.Object k8SEventEnabled;
            private final java.lang.Object k8SEventPolicySetting;
            private final java.lang.Object k8SEventTiEnabled;
            private final java.lang.Object k8SEventTtl;
            private final java.lang.Object k8SIngressCollectionPolicy;
            private final java.lang.Object k8SIngressEnabled;
            private final java.lang.Object k8SIngressPolicySetting;
            private final java.lang.Object k8SIngressTiEnabled;
            private final java.lang.Object k8SIngressTtl;
            private final java.lang.Object nasAuditCollectionPolicy;
            private final java.lang.Object nasAuditPolicySetting;
            private final java.lang.Object nasEnabled;
            private final java.lang.Object nasTiEnabled;
            private final java.lang.Object nasTtl;
            private final java.lang.Object ossAccessCollectionPolicy;
            private final java.lang.Object ossAccessEnabled;
            private final java.lang.Object ossAccessPolicySetting;
            private final java.lang.Object ossAccessTiEnabled;
            private final java.lang.Object ossAccessTtl;
            private final java.lang.Object ossMeteringCollectionPolicy;
            private final java.lang.Object ossMeteringEnabled;
            private final java.lang.Object ossMeteringPolicySetting;
            private final java.lang.Object ossMeteringTiEnabled;
            private final java.lang.Object ossMeteringTtl;
            private final java.lang.Object ossSyncEnabled;
            private final java.lang.Object ossSyncTtl;
            private final java.lang.Object polardbAuditCollectionPolicy;
            private final java.lang.Object polardbAuditPolicySetting;
            private final java.lang.Object polardbEnabled;
            private final java.lang.Object polardbPerfCollectionPolicy;
            private final java.lang.Object polardbPerfEnabled;
            private final java.lang.Object polardbPerfPolicySetting;
            private final java.lang.Object polardbPerfTiEnabled;
            private final java.lang.Object polardbPerfTtl;
            private final java.lang.Object polardbSlowCollectionPolicy;
            private final java.lang.Object polardbSlowEnabled;
            private final java.lang.Object polardbSlowPolicySetting;
            private final java.lang.Object polardbSlowTiEnabled;
            private final java.lang.Object polardbSlowTtl;
            private final java.lang.Object polardbTiEnabled;
            private final java.lang.Object polardbTtl;
            private final java.lang.Object rdsAuditCollectionPolicy;
            private final java.lang.Object rdsAuditPolicySetting;
            private final java.lang.Object rdsEnabled;
            private final java.lang.Object rdsPerfCollectionPolicy;
            private final java.lang.Object rdsPerfEnabled;
            private final java.lang.Object rdsPerfPolicySetting;
            private final java.lang.Object rdsPerfTiEnabled;
            private final java.lang.Object rdsPerfTtl;
            private final java.lang.Object rdsSlowCollectionPolicy;
            private final java.lang.Object rdsSlowEnabled;
            private final java.lang.Object rdsSlowPolicySetting;
            private final java.lang.Object rdsSlowTiEnabled;
            private final java.lang.Object rdsSlowTtl;
            private final java.lang.Object rdsTiEnabled;
            private final java.lang.Object rdsTtl;
            private final java.lang.Object redisAuditCollectionPolicy;
            private final java.lang.Object redisAuditEnabled;
            private final java.lang.Object redisAuditPolicySetting;
            private final java.lang.Object redisAuditTiEnabled;
            private final java.lang.Object redisAuditTtl;
            private final java.lang.Object redisSyncEnabled;
            private final java.lang.Object redisSyncTtl;
            private final java.lang.Object sasCrackEnabled;
            private final java.lang.Object sasDnsEnabled;
            private final java.lang.Object sasHttpEnabled;
            private final java.lang.Object sasLocalDnsEnabled;
            private final java.lang.Object sasLoginEnabled;
            private final java.lang.Object sasNetworkEnabled;
            private final java.lang.Object sasProcessEnabled;
            private final java.lang.Object sasSecurityAlertEnabled;
            private final java.lang.Object sasSecurityHcEnabled;
            private final java.lang.Object sasSecurityVulEnabled;
            private final java.lang.Object sasSessionEnabled;
            private final java.lang.Object sasSnapshotAccountEnabled;
            private final java.lang.Object sasSnapshotPortEnabled;
            private final java.lang.Object sasSnapshotProcessEnabled;
            private final java.lang.Object sasTiEnabled;
            private final java.lang.Object sasTtl;
            private final java.lang.Object slbAccessCollectionPolicy;
            private final java.lang.Object slbAccessEnabled;
            private final java.lang.Object slbAccessPolicySetting;
            private final java.lang.Object slbAccessTiEnabled;
            private final java.lang.Object slbAccessTtl;
            private final java.lang.Object slbSyncEnabled;
            private final java.lang.Object slbSyncTtl;
            private final java.lang.Object wafAccessCollectionPolicy;
            private final java.lang.Object wafAccessPolicySetting;
            private final java.lang.Object wafEnabled;
            private final java.lang.Object wafTiEnabled;
            private final java.lang.Object wafTtl;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.actiontrailEnabled = software.amazon.jsii.Kernel.get(this, "actiontrailEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actiontrailOpenapiCollectionPolicy = software.amazon.jsii.Kernel.get(this, "actiontrailOpenapiCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actiontrailOpenapiPolicySetting = software.amazon.jsii.Kernel.get(this, "actiontrailOpenapiPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actiontrailTiEnabled = software.amazon.jsii.Kernel.get(this, "actiontrailTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actiontrailTtl = software.amazon.jsii.Kernel.get(this, "actiontrailTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apigatewayAccessCollectionPolicy = software.amazon.jsii.Kernel.get(this, "apigatewayAccessCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apigatewayAccessPolicySetting = software.amazon.jsii.Kernel.get(this, "apigatewayAccessPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apigatewayEnabled = software.amazon.jsii.Kernel.get(this, "apigatewayEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apigatewayTiEnabled = software.amazon.jsii.Kernel.get(this, "apigatewayTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apigatewayTtl = software.amazon.jsii.Kernel.get(this, "apigatewayTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appconnectEnabled = software.amazon.jsii.Kernel.get(this, "appconnectEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appconnectOpCollectionPolicy = software.amazon.jsii.Kernel.get(this, "appconnectOpCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appconnectOpPolicySetting = software.amazon.jsii.Kernel.get(this, "appconnectOpPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appconnectTiEnabled = software.amazon.jsii.Kernel.get(this, "appconnectTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appconnectTtl = software.amazon.jsii.Kernel.get(this, "appconnectTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bastionAuditCollectionPolicy = software.amazon.jsii.Kernel.get(this, "bastionAuditCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bastionAuditPolicySetting = software.amazon.jsii.Kernel.get(this, "bastionAuditPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bastionEnabled = software.amazon.jsii.Kernel.get(this, "bastionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bastionTiEnabled = software.amazon.jsii.Kernel.get(this, "bastionTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bastionTtl = software.amazon.jsii.Kernel.get(this, "bastionTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cloudfirewallAccessCollectionPolicy = software.amazon.jsii.Kernel.get(this, "cloudfirewallAccessCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cloudfirewallAccessPolicySetting = software.amazon.jsii.Kernel.get(this, "cloudfirewallAccessPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cloudfirewallEnabled = software.amazon.jsii.Kernel.get(this, "cloudfirewallEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cloudfirewallTiEnabled = software.amazon.jsii.Kernel.get(this, "cloudfirewallTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cloudfirewallTtl = software.amazon.jsii.Kernel.get(this, "cloudfirewallTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpsCallbackCollectionPolicy = software.amazon.jsii.Kernel.get(this, "cpsCallbackCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpsCallbackPolicySetting = software.amazon.jsii.Kernel.get(this, "cpsCallbackPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpsEnabled = software.amazon.jsii.Kernel.get(this, "cpsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpsTiEnabled = software.amazon.jsii.Kernel.get(this, "cpsTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpsTtl = software.amazon.jsii.Kernel.get(this, "cpsTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ddosCooAccessCollectionPolicy = software.amazon.jsii.Kernel.get(this, "ddosCooAccessCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ddosCooAccessEnabled = software.amazon.jsii.Kernel.get(this, "ddosCooAccessEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ddosCooAccessPolicySetting = software.amazon.jsii.Kernel.get(this, "ddosCooAccessPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ddosCooAccessTiEnabled = software.amazon.jsii.Kernel.get(this, "ddosCooAccessTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ddosCooAccessTtl = software.amazon.jsii.Kernel.get(this, "ddosCooAccessTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.drdsAuditCollectionPolicy = software.amazon.jsii.Kernel.get(this, "drdsAuditCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.drdsAuditEnabled = software.amazon.jsii.Kernel.get(this, "drdsAuditEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.drdsAuditPolicySetting = software.amazon.jsii.Kernel.get(this, "drdsAuditPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.drdsAuditTiEnabled = software.amazon.jsii.Kernel.get(this, "drdsAuditTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.drdsAuditTtl = software.amazon.jsii.Kernel.get(this, "drdsAuditTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.drdsSyncEnabled = software.amazon.jsii.Kernel.get(this, "drdsSyncEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.drdsSyncTtl = software.amazon.jsii.Kernel.get(this, "drdsSyncTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SAuditCollectionPolicy = software.amazon.jsii.Kernel.get(this, "k8SAuditCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SAuditEnabled = software.amazon.jsii.Kernel.get(this, "k8SAuditEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SAuditPolicySetting = software.amazon.jsii.Kernel.get(this, "k8SAuditPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SAuditTiEnabled = software.amazon.jsii.Kernel.get(this, "k8SAuditTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SAuditTtl = software.amazon.jsii.Kernel.get(this, "k8SAuditTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SEventCollectionPolicy = software.amazon.jsii.Kernel.get(this, "k8SEventCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SEventEnabled = software.amazon.jsii.Kernel.get(this, "k8SEventEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SEventPolicySetting = software.amazon.jsii.Kernel.get(this, "k8SEventPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SEventTiEnabled = software.amazon.jsii.Kernel.get(this, "k8SEventTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SEventTtl = software.amazon.jsii.Kernel.get(this, "k8SEventTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SIngressCollectionPolicy = software.amazon.jsii.Kernel.get(this, "k8SIngressCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SIngressEnabled = software.amazon.jsii.Kernel.get(this, "k8SIngressEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SIngressPolicySetting = software.amazon.jsii.Kernel.get(this, "k8SIngressPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SIngressTiEnabled = software.amazon.jsii.Kernel.get(this, "k8SIngressTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.k8SIngressTtl = software.amazon.jsii.Kernel.get(this, "k8SIngressTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasAuditCollectionPolicy = software.amazon.jsii.Kernel.get(this, "nasAuditCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasAuditPolicySetting = software.amazon.jsii.Kernel.get(this, "nasAuditPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasEnabled = software.amazon.jsii.Kernel.get(this, "nasEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasTiEnabled = software.amazon.jsii.Kernel.get(this, "nasTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasTtl = software.amazon.jsii.Kernel.get(this, "nasTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossAccessCollectionPolicy = software.amazon.jsii.Kernel.get(this, "ossAccessCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossAccessEnabled = software.amazon.jsii.Kernel.get(this, "ossAccessEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossAccessPolicySetting = software.amazon.jsii.Kernel.get(this, "ossAccessPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossAccessTiEnabled = software.amazon.jsii.Kernel.get(this, "ossAccessTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossAccessTtl = software.amazon.jsii.Kernel.get(this, "ossAccessTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossMeteringCollectionPolicy = software.amazon.jsii.Kernel.get(this, "ossMeteringCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossMeteringEnabled = software.amazon.jsii.Kernel.get(this, "ossMeteringEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossMeteringPolicySetting = software.amazon.jsii.Kernel.get(this, "ossMeteringPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossMeteringTiEnabled = software.amazon.jsii.Kernel.get(this, "ossMeteringTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossMeteringTtl = software.amazon.jsii.Kernel.get(this, "ossMeteringTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossSyncEnabled = software.amazon.jsii.Kernel.get(this, "ossSyncEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossSyncTtl = software.amazon.jsii.Kernel.get(this, "ossSyncTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbAuditCollectionPolicy = software.amazon.jsii.Kernel.get(this, "polardbAuditCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbAuditPolicySetting = software.amazon.jsii.Kernel.get(this, "polardbAuditPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbEnabled = software.amazon.jsii.Kernel.get(this, "polardbEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbPerfCollectionPolicy = software.amazon.jsii.Kernel.get(this, "polardbPerfCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbPerfEnabled = software.amazon.jsii.Kernel.get(this, "polardbPerfEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbPerfPolicySetting = software.amazon.jsii.Kernel.get(this, "polardbPerfPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbPerfTiEnabled = software.amazon.jsii.Kernel.get(this, "polardbPerfTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbPerfTtl = software.amazon.jsii.Kernel.get(this, "polardbPerfTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbSlowCollectionPolicy = software.amazon.jsii.Kernel.get(this, "polardbSlowCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbSlowEnabled = software.amazon.jsii.Kernel.get(this, "polardbSlowEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbSlowPolicySetting = software.amazon.jsii.Kernel.get(this, "polardbSlowPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbSlowTiEnabled = software.amazon.jsii.Kernel.get(this, "polardbSlowTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbSlowTtl = software.amazon.jsii.Kernel.get(this, "polardbSlowTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbTiEnabled = software.amazon.jsii.Kernel.get(this, "polardbTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.polardbTtl = software.amazon.jsii.Kernel.get(this, "polardbTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsAuditCollectionPolicy = software.amazon.jsii.Kernel.get(this, "rdsAuditCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsAuditPolicySetting = software.amazon.jsii.Kernel.get(this, "rdsAuditPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsEnabled = software.amazon.jsii.Kernel.get(this, "rdsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsPerfCollectionPolicy = software.amazon.jsii.Kernel.get(this, "rdsPerfCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsPerfEnabled = software.amazon.jsii.Kernel.get(this, "rdsPerfEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsPerfPolicySetting = software.amazon.jsii.Kernel.get(this, "rdsPerfPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsPerfTiEnabled = software.amazon.jsii.Kernel.get(this, "rdsPerfTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsPerfTtl = software.amazon.jsii.Kernel.get(this, "rdsPerfTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsSlowCollectionPolicy = software.amazon.jsii.Kernel.get(this, "rdsSlowCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsSlowEnabled = software.amazon.jsii.Kernel.get(this, "rdsSlowEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsSlowPolicySetting = software.amazon.jsii.Kernel.get(this, "rdsSlowPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsSlowTiEnabled = software.amazon.jsii.Kernel.get(this, "rdsSlowTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsSlowTtl = software.amazon.jsii.Kernel.get(this, "rdsSlowTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsTiEnabled = software.amazon.jsii.Kernel.get(this, "rdsTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsTtl = software.amazon.jsii.Kernel.get(this, "rdsTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisAuditCollectionPolicy = software.amazon.jsii.Kernel.get(this, "redisAuditCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisAuditEnabled = software.amazon.jsii.Kernel.get(this, "redisAuditEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisAuditPolicySetting = software.amazon.jsii.Kernel.get(this, "redisAuditPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisAuditTiEnabled = software.amazon.jsii.Kernel.get(this, "redisAuditTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisAuditTtl = software.amazon.jsii.Kernel.get(this, "redisAuditTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisSyncEnabled = software.amazon.jsii.Kernel.get(this, "redisSyncEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisSyncTtl = software.amazon.jsii.Kernel.get(this, "redisSyncTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasCrackEnabled = software.amazon.jsii.Kernel.get(this, "sasCrackEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasDnsEnabled = software.amazon.jsii.Kernel.get(this, "sasDnsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasHttpEnabled = software.amazon.jsii.Kernel.get(this, "sasHttpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasLocalDnsEnabled = software.amazon.jsii.Kernel.get(this, "sasLocalDnsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasLoginEnabled = software.amazon.jsii.Kernel.get(this, "sasLoginEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasNetworkEnabled = software.amazon.jsii.Kernel.get(this, "sasNetworkEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasProcessEnabled = software.amazon.jsii.Kernel.get(this, "sasProcessEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasSecurityAlertEnabled = software.amazon.jsii.Kernel.get(this, "sasSecurityAlertEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasSecurityHcEnabled = software.amazon.jsii.Kernel.get(this, "sasSecurityHcEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasSecurityVulEnabled = software.amazon.jsii.Kernel.get(this, "sasSecurityVulEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasSessionEnabled = software.amazon.jsii.Kernel.get(this, "sasSessionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasSnapshotAccountEnabled = software.amazon.jsii.Kernel.get(this, "sasSnapshotAccountEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasSnapshotPortEnabled = software.amazon.jsii.Kernel.get(this, "sasSnapshotPortEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasSnapshotProcessEnabled = software.amazon.jsii.Kernel.get(this, "sasSnapshotProcessEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasTiEnabled = software.amazon.jsii.Kernel.get(this, "sasTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sasTtl = software.amazon.jsii.Kernel.get(this, "sasTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbAccessCollectionPolicy = software.amazon.jsii.Kernel.get(this, "slbAccessCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbAccessEnabled = software.amazon.jsii.Kernel.get(this, "slbAccessEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbAccessPolicySetting = software.amazon.jsii.Kernel.get(this, "slbAccessPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbAccessTiEnabled = software.amazon.jsii.Kernel.get(this, "slbAccessTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbAccessTtl = software.amazon.jsii.Kernel.get(this, "slbAccessTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbSyncEnabled = software.amazon.jsii.Kernel.get(this, "slbSyncEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbSyncTtl = software.amazon.jsii.Kernel.get(this, "slbSyncTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wafAccessCollectionPolicy = software.amazon.jsii.Kernel.get(this, "wafAccessCollectionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wafAccessPolicySetting = software.amazon.jsii.Kernel.get(this, "wafAccessPolicySetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wafEnabled = software.amazon.jsii.Kernel.get(this, "wafEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wafTiEnabled = software.amazon.jsii.Kernel.get(this, "wafTiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wafTtl = software.amazon.jsii.Kernel.get(this, "wafTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.actiontrailEnabled = builder.actiontrailEnabled;
                this.actiontrailOpenapiCollectionPolicy = builder.actiontrailOpenapiCollectionPolicy;
                this.actiontrailOpenapiPolicySetting = builder.actiontrailOpenapiPolicySetting;
                this.actiontrailTiEnabled = builder.actiontrailTiEnabled;
                this.actiontrailTtl = builder.actiontrailTtl;
                this.apigatewayAccessCollectionPolicy = builder.apigatewayAccessCollectionPolicy;
                this.apigatewayAccessPolicySetting = builder.apigatewayAccessPolicySetting;
                this.apigatewayEnabled = builder.apigatewayEnabled;
                this.apigatewayTiEnabled = builder.apigatewayTiEnabled;
                this.apigatewayTtl = builder.apigatewayTtl;
                this.appconnectEnabled = builder.appconnectEnabled;
                this.appconnectOpCollectionPolicy = builder.appconnectOpCollectionPolicy;
                this.appconnectOpPolicySetting = builder.appconnectOpPolicySetting;
                this.appconnectTiEnabled = builder.appconnectTiEnabled;
                this.appconnectTtl = builder.appconnectTtl;
                this.bastionAuditCollectionPolicy = builder.bastionAuditCollectionPolicy;
                this.bastionAuditPolicySetting = builder.bastionAuditPolicySetting;
                this.bastionEnabled = builder.bastionEnabled;
                this.bastionTiEnabled = builder.bastionTiEnabled;
                this.bastionTtl = builder.bastionTtl;
                this.cloudfirewallAccessCollectionPolicy = builder.cloudfirewallAccessCollectionPolicy;
                this.cloudfirewallAccessPolicySetting = builder.cloudfirewallAccessPolicySetting;
                this.cloudfirewallEnabled = builder.cloudfirewallEnabled;
                this.cloudfirewallTiEnabled = builder.cloudfirewallTiEnabled;
                this.cloudfirewallTtl = builder.cloudfirewallTtl;
                this.cpsCallbackCollectionPolicy = builder.cpsCallbackCollectionPolicy;
                this.cpsCallbackPolicySetting = builder.cpsCallbackPolicySetting;
                this.cpsEnabled = builder.cpsEnabled;
                this.cpsTiEnabled = builder.cpsTiEnabled;
                this.cpsTtl = builder.cpsTtl;
                this.ddosCooAccessCollectionPolicy = builder.ddosCooAccessCollectionPolicy;
                this.ddosCooAccessEnabled = builder.ddosCooAccessEnabled;
                this.ddosCooAccessPolicySetting = builder.ddosCooAccessPolicySetting;
                this.ddosCooAccessTiEnabled = builder.ddosCooAccessTiEnabled;
                this.ddosCooAccessTtl = builder.ddosCooAccessTtl;
                this.drdsAuditCollectionPolicy = builder.drdsAuditCollectionPolicy;
                this.drdsAuditEnabled = builder.drdsAuditEnabled;
                this.drdsAuditPolicySetting = builder.drdsAuditPolicySetting;
                this.drdsAuditTiEnabled = builder.drdsAuditTiEnabled;
                this.drdsAuditTtl = builder.drdsAuditTtl;
                this.drdsSyncEnabled = builder.drdsSyncEnabled;
                this.drdsSyncTtl = builder.drdsSyncTtl;
                this.k8SAuditCollectionPolicy = builder.k8SAuditCollectionPolicy;
                this.k8SAuditEnabled = builder.k8SAuditEnabled;
                this.k8SAuditPolicySetting = builder.k8SAuditPolicySetting;
                this.k8SAuditTiEnabled = builder.k8SAuditTiEnabled;
                this.k8SAuditTtl = builder.k8SAuditTtl;
                this.k8SEventCollectionPolicy = builder.k8SEventCollectionPolicy;
                this.k8SEventEnabled = builder.k8SEventEnabled;
                this.k8SEventPolicySetting = builder.k8SEventPolicySetting;
                this.k8SEventTiEnabled = builder.k8SEventTiEnabled;
                this.k8SEventTtl = builder.k8SEventTtl;
                this.k8SIngressCollectionPolicy = builder.k8SIngressCollectionPolicy;
                this.k8SIngressEnabled = builder.k8SIngressEnabled;
                this.k8SIngressPolicySetting = builder.k8SIngressPolicySetting;
                this.k8SIngressTiEnabled = builder.k8SIngressTiEnabled;
                this.k8SIngressTtl = builder.k8SIngressTtl;
                this.nasAuditCollectionPolicy = builder.nasAuditCollectionPolicy;
                this.nasAuditPolicySetting = builder.nasAuditPolicySetting;
                this.nasEnabled = builder.nasEnabled;
                this.nasTiEnabled = builder.nasTiEnabled;
                this.nasTtl = builder.nasTtl;
                this.ossAccessCollectionPolicy = builder.ossAccessCollectionPolicy;
                this.ossAccessEnabled = builder.ossAccessEnabled;
                this.ossAccessPolicySetting = builder.ossAccessPolicySetting;
                this.ossAccessTiEnabled = builder.ossAccessTiEnabled;
                this.ossAccessTtl = builder.ossAccessTtl;
                this.ossMeteringCollectionPolicy = builder.ossMeteringCollectionPolicy;
                this.ossMeteringEnabled = builder.ossMeteringEnabled;
                this.ossMeteringPolicySetting = builder.ossMeteringPolicySetting;
                this.ossMeteringTiEnabled = builder.ossMeteringTiEnabled;
                this.ossMeteringTtl = builder.ossMeteringTtl;
                this.ossSyncEnabled = builder.ossSyncEnabled;
                this.ossSyncTtl = builder.ossSyncTtl;
                this.polardbAuditCollectionPolicy = builder.polardbAuditCollectionPolicy;
                this.polardbAuditPolicySetting = builder.polardbAuditPolicySetting;
                this.polardbEnabled = builder.polardbEnabled;
                this.polardbPerfCollectionPolicy = builder.polardbPerfCollectionPolicy;
                this.polardbPerfEnabled = builder.polardbPerfEnabled;
                this.polardbPerfPolicySetting = builder.polardbPerfPolicySetting;
                this.polardbPerfTiEnabled = builder.polardbPerfTiEnabled;
                this.polardbPerfTtl = builder.polardbPerfTtl;
                this.polardbSlowCollectionPolicy = builder.polardbSlowCollectionPolicy;
                this.polardbSlowEnabled = builder.polardbSlowEnabled;
                this.polardbSlowPolicySetting = builder.polardbSlowPolicySetting;
                this.polardbSlowTiEnabled = builder.polardbSlowTiEnabled;
                this.polardbSlowTtl = builder.polardbSlowTtl;
                this.polardbTiEnabled = builder.polardbTiEnabled;
                this.polardbTtl = builder.polardbTtl;
                this.rdsAuditCollectionPolicy = builder.rdsAuditCollectionPolicy;
                this.rdsAuditPolicySetting = builder.rdsAuditPolicySetting;
                this.rdsEnabled = builder.rdsEnabled;
                this.rdsPerfCollectionPolicy = builder.rdsPerfCollectionPolicy;
                this.rdsPerfEnabled = builder.rdsPerfEnabled;
                this.rdsPerfPolicySetting = builder.rdsPerfPolicySetting;
                this.rdsPerfTiEnabled = builder.rdsPerfTiEnabled;
                this.rdsPerfTtl = builder.rdsPerfTtl;
                this.rdsSlowCollectionPolicy = builder.rdsSlowCollectionPolicy;
                this.rdsSlowEnabled = builder.rdsSlowEnabled;
                this.rdsSlowPolicySetting = builder.rdsSlowPolicySetting;
                this.rdsSlowTiEnabled = builder.rdsSlowTiEnabled;
                this.rdsSlowTtl = builder.rdsSlowTtl;
                this.rdsTiEnabled = builder.rdsTiEnabled;
                this.rdsTtl = builder.rdsTtl;
                this.redisAuditCollectionPolicy = builder.redisAuditCollectionPolicy;
                this.redisAuditEnabled = builder.redisAuditEnabled;
                this.redisAuditPolicySetting = builder.redisAuditPolicySetting;
                this.redisAuditTiEnabled = builder.redisAuditTiEnabled;
                this.redisAuditTtl = builder.redisAuditTtl;
                this.redisSyncEnabled = builder.redisSyncEnabled;
                this.redisSyncTtl = builder.redisSyncTtl;
                this.sasCrackEnabled = builder.sasCrackEnabled;
                this.sasDnsEnabled = builder.sasDnsEnabled;
                this.sasHttpEnabled = builder.sasHttpEnabled;
                this.sasLocalDnsEnabled = builder.sasLocalDnsEnabled;
                this.sasLoginEnabled = builder.sasLoginEnabled;
                this.sasNetworkEnabled = builder.sasNetworkEnabled;
                this.sasProcessEnabled = builder.sasProcessEnabled;
                this.sasSecurityAlertEnabled = builder.sasSecurityAlertEnabled;
                this.sasSecurityHcEnabled = builder.sasSecurityHcEnabled;
                this.sasSecurityVulEnabled = builder.sasSecurityVulEnabled;
                this.sasSessionEnabled = builder.sasSessionEnabled;
                this.sasSnapshotAccountEnabled = builder.sasSnapshotAccountEnabled;
                this.sasSnapshotPortEnabled = builder.sasSnapshotPortEnabled;
                this.sasSnapshotProcessEnabled = builder.sasSnapshotProcessEnabled;
                this.sasTiEnabled = builder.sasTiEnabled;
                this.sasTtl = builder.sasTtl;
                this.slbAccessCollectionPolicy = builder.slbAccessCollectionPolicy;
                this.slbAccessEnabled = builder.slbAccessEnabled;
                this.slbAccessPolicySetting = builder.slbAccessPolicySetting;
                this.slbAccessTiEnabled = builder.slbAccessTiEnabled;
                this.slbAccessTtl = builder.slbAccessTtl;
                this.slbSyncEnabled = builder.slbSyncEnabled;
                this.slbSyncTtl = builder.slbSyncTtl;
                this.wafAccessCollectionPolicy = builder.wafAccessCollectionPolicy;
                this.wafAccessPolicySetting = builder.wafAccessPolicySetting;
                this.wafEnabled = builder.wafEnabled;
                this.wafTiEnabled = builder.wafTiEnabled;
                this.wafTtl = builder.wafTtl;
            }

            @Override
            public final java.lang.Object getActiontrailEnabled() {
                return this.actiontrailEnabled;
            }

            @Override
            public final java.lang.Object getActiontrailOpenapiCollectionPolicy() {
                return this.actiontrailOpenapiCollectionPolicy;
            }

            @Override
            public final java.lang.Object getActiontrailOpenapiPolicySetting() {
                return this.actiontrailOpenapiPolicySetting;
            }

            @Override
            public final java.lang.Object getActiontrailTiEnabled() {
                return this.actiontrailTiEnabled;
            }

            @Override
            public final java.lang.Object getActiontrailTtl() {
                return this.actiontrailTtl;
            }

            @Override
            public final java.lang.Object getApigatewayAccessCollectionPolicy() {
                return this.apigatewayAccessCollectionPolicy;
            }

            @Override
            public final java.lang.Object getApigatewayAccessPolicySetting() {
                return this.apigatewayAccessPolicySetting;
            }

            @Override
            public final java.lang.Object getApigatewayEnabled() {
                return this.apigatewayEnabled;
            }

            @Override
            public final java.lang.Object getApigatewayTiEnabled() {
                return this.apigatewayTiEnabled;
            }

            @Override
            public final java.lang.Object getApigatewayTtl() {
                return this.apigatewayTtl;
            }

            @Override
            public final java.lang.Object getAppconnectEnabled() {
                return this.appconnectEnabled;
            }

            @Override
            public final java.lang.Object getAppconnectOpCollectionPolicy() {
                return this.appconnectOpCollectionPolicy;
            }

            @Override
            public final java.lang.Object getAppconnectOpPolicySetting() {
                return this.appconnectOpPolicySetting;
            }

            @Override
            public final java.lang.Object getAppconnectTiEnabled() {
                return this.appconnectTiEnabled;
            }

            @Override
            public final java.lang.Object getAppconnectTtl() {
                return this.appconnectTtl;
            }

            @Override
            public final java.lang.Object getBastionAuditCollectionPolicy() {
                return this.bastionAuditCollectionPolicy;
            }

            @Override
            public final java.lang.Object getBastionAuditPolicySetting() {
                return this.bastionAuditPolicySetting;
            }

            @Override
            public final java.lang.Object getBastionEnabled() {
                return this.bastionEnabled;
            }

            @Override
            public final java.lang.Object getBastionTiEnabled() {
                return this.bastionTiEnabled;
            }

            @Override
            public final java.lang.Object getBastionTtl() {
                return this.bastionTtl;
            }

            @Override
            public final java.lang.Object getCloudfirewallAccessCollectionPolicy() {
                return this.cloudfirewallAccessCollectionPolicy;
            }

            @Override
            public final java.lang.Object getCloudfirewallAccessPolicySetting() {
                return this.cloudfirewallAccessPolicySetting;
            }

            @Override
            public final java.lang.Object getCloudfirewallEnabled() {
                return this.cloudfirewallEnabled;
            }

            @Override
            public final java.lang.Object getCloudfirewallTiEnabled() {
                return this.cloudfirewallTiEnabled;
            }

            @Override
            public final java.lang.Object getCloudfirewallTtl() {
                return this.cloudfirewallTtl;
            }

            @Override
            public final java.lang.Object getCpsCallbackCollectionPolicy() {
                return this.cpsCallbackCollectionPolicy;
            }

            @Override
            public final java.lang.Object getCpsCallbackPolicySetting() {
                return this.cpsCallbackPolicySetting;
            }

            @Override
            public final java.lang.Object getCpsEnabled() {
                return this.cpsEnabled;
            }

            @Override
            public final java.lang.Object getCpsTiEnabled() {
                return this.cpsTiEnabled;
            }

            @Override
            public final java.lang.Object getCpsTtl() {
                return this.cpsTtl;
            }

            @Override
            public final java.lang.Object getDdosCooAccessCollectionPolicy() {
                return this.ddosCooAccessCollectionPolicy;
            }

            @Override
            public final java.lang.Object getDdosCooAccessEnabled() {
                return this.ddosCooAccessEnabled;
            }

            @Override
            public final java.lang.Object getDdosCooAccessPolicySetting() {
                return this.ddosCooAccessPolicySetting;
            }

            @Override
            public final java.lang.Object getDdosCooAccessTiEnabled() {
                return this.ddosCooAccessTiEnabled;
            }

            @Override
            public final java.lang.Object getDdosCooAccessTtl() {
                return this.ddosCooAccessTtl;
            }

            @Override
            public final java.lang.Object getDrdsAuditCollectionPolicy() {
                return this.drdsAuditCollectionPolicy;
            }

            @Override
            public final java.lang.Object getDrdsAuditEnabled() {
                return this.drdsAuditEnabled;
            }

            @Override
            public final java.lang.Object getDrdsAuditPolicySetting() {
                return this.drdsAuditPolicySetting;
            }

            @Override
            public final java.lang.Object getDrdsAuditTiEnabled() {
                return this.drdsAuditTiEnabled;
            }

            @Override
            public final java.lang.Object getDrdsAuditTtl() {
                return this.drdsAuditTtl;
            }

            @Override
            public final java.lang.Object getDrdsSyncEnabled() {
                return this.drdsSyncEnabled;
            }

            @Override
            public final java.lang.Object getDrdsSyncTtl() {
                return this.drdsSyncTtl;
            }

            @Override
            public final java.lang.Object getK8SAuditCollectionPolicy() {
                return this.k8SAuditCollectionPolicy;
            }

            @Override
            public final java.lang.Object getK8SAuditEnabled() {
                return this.k8SAuditEnabled;
            }

            @Override
            public final java.lang.Object getK8SAuditPolicySetting() {
                return this.k8SAuditPolicySetting;
            }

            @Override
            public final java.lang.Object getK8SAuditTiEnabled() {
                return this.k8SAuditTiEnabled;
            }

            @Override
            public final java.lang.Object getK8SAuditTtl() {
                return this.k8SAuditTtl;
            }

            @Override
            public final java.lang.Object getK8SEventCollectionPolicy() {
                return this.k8SEventCollectionPolicy;
            }

            @Override
            public final java.lang.Object getK8SEventEnabled() {
                return this.k8SEventEnabled;
            }

            @Override
            public final java.lang.Object getK8SEventPolicySetting() {
                return this.k8SEventPolicySetting;
            }

            @Override
            public final java.lang.Object getK8SEventTiEnabled() {
                return this.k8SEventTiEnabled;
            }

            @Override
            public final java.lang.Object getK8SEventTtl() {
                return this.k8SEventTtl;
            }

            @Override
            public final java.lang.Object getK8SIngressCollectionPolicy() {
                return this.k8SIngressCollectionPolicy;
            }

            @Override
            public final java.lang.Object getK8SIngressEnabled() {
                return this.k8SIngressEnabled;
            }

            @Override
            public final java.lang.Object getK8SIngressPolicySetting() {
                return this.k8SIngressPolicySetting;
            }

            @Override
            public final java.lang.Object getK8SIngressTiEnabled() {
                return this.k8SIngressTiEnabled;
            }

            @Override
            public final java.lang.Object getK8SIngressTtl() {
                return this.k8SIngressTtl;
            }

            @Override
            public final java.lang.Object getNasAuditCollectionPolicy() {
                return this.nasAuditCollectionPolicy;
            }

            @Override
            public final java.lang.Object getNasAuditPolicySetting() {
                return this.nasAuditPolicySetting;
            }

            @Override
            public final java.lang.Object getNasEnabled() {
                return this.nasEnabled;
            }

            @Override
            public final java.lang.Object getNasTiEnabled() {
                return this.nasTiEnabled;
            }

            @Override
            public final java.lang.Object getNasTtl() {
                return this.nasTtl;
            }

            @Override
            public final java.lang.Object getOssAccessCollectionPolicy() {
                return this.ossAccessCollectionPolicy;
            }

            @Override
            public final java.lang.Object getOssAccessEnabled() {
                return this.ossAccessEnabled;
            }

            @Override
            public final java.lang.Object getOssAccessPolicySetting() {
                return this.ossAccessPolicySetting;
            }

            @Override
            public final java.lang.Object getOssAccessTiEnabled() {
                return this.ossAccessTiEnabled;
            }

            @Override
            public final java.lang.Object getOssAccessTtl() {
                return this.ossAccessTtl;
            }

            @Override
            public final java.lang.Object getOssMeteringCollectionPolicy() {
                return this.ossMeteringCollectionPolicy;
            }

            @Override
            public final java.lang.Object getOssMeteringEnabled() {
                return this.ossMeteringEnabled;
            }

            @Override
            public final java.lang.Object getOssMeteringPolicySetting() {
                return this.ossMeteringPolicySetting;
            }

            @Override
            public final java.lang.Object getOssMeteringTiEnabled() {
                return this.ossMeteringTiEnabled;
            }

            @Override
            public final java.lang.Object getOssMeteringTtl() {
                return this.ossMeteringTtl;
            }

            @Override
            public final java.lang.Object getOssSyncEnabled() {
                return this.ossSyncEnabled;
            }

            @Override
            public final java.lang.Object getOssSyncTtl() {
                return this.ossSyncTtl;
            }

            @Override
            public final java.lang.Object getPolardbAuditCollectionPolicy() {
                return this.polardbAuditCollectionPolicy;
            }

            @Override
            public final java.lang.Object getPolardbAuditPolicySetting() {
                return this.polardbAuditPolicySetting;
            }

            @Override
            public final java.lang.Object getPolardbEnabled() {
                return this.polardbEnabled;
            }

            @Override
            public final java.lang.Object getPolardbPerfCollectionPolicy() {
                return this.polardbPerfCollectionPolicy;
            }

            @Override
            public final java.lang.Object getPolardbPerfEnabled() {
                return this.polardbPerfEnabled;
            }

            @Override
            public final java.lang.Object getPolardbPerfPolicySetting() {
                return this.polardbPerfPolicySetting;
            }

            @Override
            public final java.lang.Object getPolardbPerfTiEnabled() {
                return this.polardbPerfTiEnabled;
            }

            @Override
            public final java.lang.Object getPolardbPerfTtl() {
                return this.polardbPerfTtl;
            }

            @Override
            public final java.lang.Object getPolardbSlowCollectionPolicy() {
                return this.polardbSlowCollectionPolicy;
            }

            @Override
            public final java.lang.Object getPolardbSlowEnabled() {
                return this.polardbSlowEnabled;
            }

            @Override
            public final java.lang.Object getPolardbSlowPolicySetting() {
                return this.polardbSlowPolicySetting;
            }

            @Override
            public final java.lang.Object getPolardbSlowTiEnabled() {
                return this.polardbSlowTiEnabled;
            }

            @Override
            public final java.lang.Object getPolardbSlowTtl() {
                return this.polardbSlowTtl;
            }

            @Override
            public final java.lang.Object getPolardbTiEnabled() {
                return this.polardbTiEnabled;
            }

            @Override
            public final java.lang.Object getPolardbTtl() {
                return this.polardbTtl;
            }

            @Override
            public final java.lang.Object getRdsAuditCollectionPolicy() {
                return this.rdsAuditCollectionPolicy;
            }

            @Override
            public final java.lang.Object getRdsAuditPolicySetting() {
                return this.rdsAuditPolicySetting;
            }

            @Override
            public final java.lang.Object getRdsEnabled() {
                return this.rdsEnabled;
            }

            @Override
            public final java.lang.Object getRdsPerfCollectionPolicy() {
                return this.rdsPerfCollectionPolicy;
            }

            @Override
            public final java.lang.Object getRdsPerfEnabled() {
                return this.rdsPerfEnabled;
            }

            @Override
            public final java.lang.Object getRdsPerfPolicySetting() {
                return this.rdsPerfPolicySetting;
            }

            @Override
            public final java.lang.Object getRdsPerfTiEnabled() {
                return this.rdsPerfTiEnabled;
            }

            @Override
            public final java.lang.Object getRdsPerfTtl() {
                return this.rdsPerfTtl;
            }

            @Override
            public final java.lang.Object getRdsSlowCollectionPolicy() {
                return this.rdsSlowCollectionPolicy;
            }

            @Override
            public final java.lang.Object getRdsSlowEnabled() {
                return this.rdsSlowEnabled;
            }

            @Override
            public final java.lang.Object getRdsSlowPolicySetting() {
                return this.rdsSlowPolicySetting;
            }

            @Override
            public final java.lang.Object getRdsSlowTiEnabled() {
                return this.rdsSlowTiEnabled;
            }

            @Override
            public final java.lang.Object getRdsSlowTtl() {
                return this.rdsSlowTtl;
            }

            @Override
            public final java.lang.Object getRdsTiEnabled() {
                return this.rdsTiEnabled;
            }

            @Override
            public final java.lang.Object getRdsTtl() {
                return this.rdsTtl;
            }

            @Override
            public final java.lang.Object getRedisAuditCollectionPolicy() {
                return this.redisAuditCollectionPolicy;
            }

            @Override
            public final java.lang.Object getRedisAuditEnabled() {
                return this.redisAuditEnabled;
            }

            @Override
            public final java.lang.Object getRedisAuditPolicySetting() {
                return this.redisAuditPolicySetting;
            }

            @Override
            public final java.lang.Object getRedisAuditTiEnabled() {
                return this.redisAuditTiEnabled;
            }

            @Override
            public final java.lang.Object getRedisAuditTtl() {
                return this.redisAuditTtl;
            }

            @Override
            public final java.lang.Object getRedisSyncEnabled() {
                return this.redisSyncEnabled;
            }

            @Override
            public final java.lang.Object getRedisSyncTtl() {
                return this.redisSyncTtl;
            }

            @Override
            public final java.lang.Object getSasCrackEnabled() {
                return this.sasCrackEnabled;
            }

            @Override
            public final java.lang.Object getSasDnsEnabled() {
                return this.sasDnsEnabled;
            }

            @Override
            public final java.lang.Object getSasHttpEnabled() {
                return this.sasHttpEnabled;
            }

            @Override
            public final java.lang.Object getSasLocalDnsEnabled() {
                return this.sasLocalDnsEnabled;
            }

            @Override
            public final java.lang.Object getSasLoginEnabled() {
                return this.sasLoginEnabled;
            }

            @Override
            public final java.lang.Object getSasNetworkEnabled() {
                return this.sasNetworkEnabled;
            }

            @Override
            public final java.lang.Object getSasProcessEnabled() {
                return this.sasProcessEnabled;
            }

            @Override
            public final java.lang.Object getSasSecurityAlertEnabled() {
                return this.sasSecurityAlertEnabled;
            }

            @Override
            public final java.lang.Object getSasSecurityHcEnabled() {
                return this.sasSecurityHcEnabled;
            }

            @Override
            public final java.lang.Object getSasSecurityVulEnabled() {
                return this.sasSecurityVulEnabled;
            }

            @Override
            public final java.lang.Object getSasSessionEnabled() {
                return this.sasSessionEnabled;
            }

            @Override
            public final java.lang.Object getSasSnapshotAccountEnabled() {
                return this.sasSnapshotAccountEnabled;
            }

            @Override
            public final java.lang.Object getSasSnapshotPortEnabled() {
                return this.sasSnapshotPortEnabled;
            }

            @Override
            public final java.lang.Object getSasSnapshotProcessEnabled() {
                return this.sasSnapshotProcessEnabled;
            }

            @Override
            public final java.lang.Object getSasTiEnabled() {
                return this.sasTiEnabled;
            }

            @Override
            public final java.lang.Object getSasTtl() {
                return this.sasTtl;
            }

            @Override
            public final java.lang.Object getSlbAccessCollectionPolicy() {
                return this.slbAccessCollectionPolicy;
            }

            @Override
            public final java.lang.Object getSlbAccessEnabled() {
                return this.slbAccessEnabled;
            }

            @Override
            public final java.lang.Object getSlbAccessPolicySetting() {
                return this.slbAccessPolicySetting;
            }

            @Override
            public final java.lang.Object getSlbAccessTiEnabled() {
                return this.slbAccessTiEnabled;
            }

            @Override
            public final java.lang.Object getSlbAccessTtl() {
                return this.slbAccessTtl;
            }

            @Override
            public final java.lang.Object getSlbSyncEnabled() {
                return this.slbSyncEnabled;
            }

            @Override
            public final java.lang.Object getSlbSyncTtl() {
                return this.slbSyncTtl;
            }

            @Override
            public final java.lang.Object getWafAccessCollectionPolicy() {
                return this.wafAccessCollectionPolicy;
            }

            @Override
            public final java.lang.Object getWafAccessPolicySetting() {
                return this.wafAccessPolicySetting;
            }

            @Override
            public final java.lang.Object getWafEnabled() {
                return this.wafEnabled;
            }

            @Override
            public final java.lang.Object getWafTiEnabled() {
                return this.wafTiEnabled;
            }

            @Override
            public final java.lang.Object getWafTtl() {
                return this.wafTtl;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getActiontrailEnabled() != null) {
                    data.set("actiontrailEnabled", om.valueToTree(this.getActiontrailEnabled()));
                }
                if (this.getActiontrailOpenapiCollectionPolicy() != null) {
                    data.set("actiontrailOpenapiCollectionPolicy", om.valueToTree(this.getActiontrailOpenapiCollectionPolicy()));
                }
                if (this.getActiontrailOpenapiPolicySetting() != null) {
                    data.set("actiontrailOpenapiPolicySetting", om.valueToTree(this.getActiontrailOpenapiPolicySetting()));
                }
                if (this.getActiontrailTiEnabled() != null) {
                    data.set("actiontrailTiEnabled", om.valueToTree(this.getActiontrailTiEnabled()));
                }
                if (this.getActiontrailTtl() != null) {
                    data.set("actiontrailTtl", om.valueToTree(this.getActiontrailTtl()));
                }
                if (this.getApigatewayAccessCollectionPolicy() != null) {
                    data.set("apigatewayAccessCollectionPolicy", om.valueToTree(this.getApigatewayAccessCollectionPolicy()));
                }
                if (this.getApigatewayAccessPolicySetting() != null) {
                    data.set("apigatewayAccessPolicySetting", om.valueToTree(this.getApigatewayAccessPolicySetting()));
                }
                if (this.getApigatewayEnabled() != null) {
                    data.set("apigatewayEnabled", om.valueToTree(this.getApigatewayEnabled()));
                }
                if (this.getApigatewayTiEnabled() != null) {
                    data.set("apigatewayTiEnabled", om.valueToTree(this.getApigatewayTiEnabled()));
                }
                if (this.getApigatewayTtl() != null) {
                    data.set("apigatewayTtl", om.valueToTree(this.getApigatewayTtl()));
                }
                if (this.getAppconnectEnabled() != null) {
                    data.set("appconnectEnabled", om.valueToTree(this.getAppconnectEnabled()));
                }
                if (this.getAppconnectOpCollectionPolicy() != null) {
                    data.set("appconnectOpCollectionPolicy", om.valueToTree(this.getAppconnectOpCollectionPolicy()));
                }
                if (this.getAppconnectOpPolicySetting() != null) {
                    data.set("appconnectOpPolicySetting", om.valueToTree(this.getAppconnectOpPolicySetting()));
                }
                if (this.getAppconnectTiEnabled() != null) {
                    data.set("appconnectTiEnabled", om.valueToTree(this.getAppconnectTiEnabled()));
                }
                if (this.getAppconnectTtl() != null) {
                    data.set("appconnectTtl", om.valueToTree(this.getAppconnectTtl()));
                }
                if (this.getBastionAuditCollectionPolicy() != null) {
                    data.set("bastionAuditCollectionPolicy", om.valueToTree(this.getBastionAuditCollectionPolicy()));
                }
                if (this.getBastionAuditPolicySetting() != null) {
                    data.set("bastionAuditPolicySetting", om.valueToTree(this.getBastionAuditPolicySetting()));
                }
                if (this.getBastionEnabled() != null) {
                    data.set("bastionEnabled", om.valueToTree(this.getBastionEnabled()));
                }
                if (this.getBastionTiEnabled() != null) {
                    data.set("bastionTiEnabled", om.valueToTree(this.getBastionTiEnabled()));
                }
                if (this.getBastionTtl() != null) {
                    data.set("bastionTtl", om.valueToTree(this.getBastionTtl()));
                }
                if (this.getCloudfirewallAccessCollectionPolicy() != null) {
                    data.set("cloudfirewallAccessCollectionPolicy", om.valueToTree(this.getCloudfirewallAccessCollectionPolicy()));
                }
                if (this.getCloudfirewallAccessPolicySetting() != null) {
                    data.set("cloudfirewallAccessPolicySetting", om.valueToTree(this.getCloudfirewallAccessPolicySetting()));
                }
                if (this.getCloudfirewallEnabled() != null) {
                    data.set("cloudfirewallEnabled", om.valueToTree(this.getCloudfirewallEnabled()));
                }
                if (this.getCloudfirewallTiEnabled() != null) {
                    data.set("cloudfirewallTiEnabled", om.valueToTree(this.getCloudfirewallTiEnabled()));
                }
                if (this.getCloudfirewallTtl() != null) {
                    data.set("cloudfirewallTtl", om.valueToTree(this.getCloudfirewallTtl()));
                }
                if (this.getCpsCallbackCollectionPolicy() != null) {
                    data.set("cpsCallbackCollectionPolicy", om.valueToTree(this.getCpsCallbackCollectionPolicy()));
                }
                if (this.getCpsCallbackPolicySetting() != null) {
                    data.set("cpsCallbackPolicySetting", om.valueToTree(this.getCpsCallbackPolicySetting()));
                }
                if (this.getCpsEnabled() != null) {
                    data.set("cpsEnabled", om.valueToTree(this.getCpsEnabled()));
                }
                if (this.getCpsTiEnabled() != null) {
                    data.set("cpsTiEnabled", om.valueToTree(this.getCpsTiEnabled()));
                }
                if (this.getCpsTtl() != null) {
                    data.set("cpsTtl", om.valueToTree(this.getCpsTtl()));
                }
                if (this.getDdosCooAccessCollectionPolicy() != null) {
                    data.set("ddosCooAccessCollectionPolicy", om.valueToTree(this.getDdosCooAccessCollectionPolicy()));
                }
                if (this.getDdosCooAccessEnabled() != null) {
                    data.set("ddosCooAccessEnabled", om.valueToTree(this.getDdosCooAccessEnabled()));
                }
                if (this.getDdosCooAccessPolicySetting() != null) {
                    data.set("ddosCooAccessPolicySetting", om.valueToTree(this.getDdosCooAccessPolicySetting()));
                }
                if (this.getDdosCooAccessTiEnabled() != null) {
                    data.set("ddosCooAccessTiEnabled", om.valueToTree(this.getDdosCooAccessTiEnabled()));
                }
                if (this.getDdosCooAccessTtl() != null) {
                    data.set("ddosCooAccessTtl", om.valueToTree(this.getDdosCooAccessTtl()));
                }
                if (this.getDrdsAuditCollectionPolicy() != null) {
                    data.set("drdsAuditCollectionPolicy", om.valueToTree(this.getDrdsAuditCollectionPolicy()));
                }
                if (this.getDrdsAuditEnabled() != null) {
                    data.set("drdsAuditEnabled", om.valueToTree(this.getDrdsAuditEnabled()));
                }
                if (this.getDrdsAuditPolicySetting() != null) {
                    data.set("drdsAuditPolicySetting", om.valueToTree(this.getDrdsAuditPolicySetting()));
                }
                if (this.getDrdsAuditTiEnabled() != null) {
                    data.set("drdsAuditTiEnabled", om.valueToTree(this.getDrdsAuditTiEnabled()));
                }
                if (this.getDrdsAuditTtl() != null) {
                    data.set("drdsAuditTtl", om.valueToTree(this.getDrdsAuditTtl()));
                }
                if (this.getDrdsSyncEnabled() != null) {
                    data.set("drdsSyncEnabled", om.valueToTree(this.getDrdsSyncEnabled()));
                }
                if (this.getDrdsSyncTtl() != null) {
                    data.set("drdsSyncTtl", om.valueToTree(this.getDrdsSyncTtl()));
                }
                if (this.getK8SAuditCollectionPolicy() != null) {
                    data.set("k8SAuditCollectionPolicy", om.valueToTree(this.getK8SAuditCollectionPolicy()));
                }
                if (this.getK8SAuditEnabled() != null) {
                    data.set("k8SAuditEnabled", om.valueToTree(this.getK8SAuditEnabled()));
                }
                if (this.getK8SAuditPolicySetting() != null) {
                    data.set("k8SAuditPolicySetting", om.valueToTree(this.getK8SAuditPolicySetting()));
                }
                if (this.getK8SAuditTiEnabled() != null) {
                    data.set("k8SAuditTiEnabled", om.valueToTree(this.getK8SAuditTiEnabled()));
                }
                if (this.getK8SAuditTtl() != null) {
                    data.set("k8SAuditTtl", om.valueToTree(this.getK8SAuditTtl()));
                }
                if (this.getK8SEventCollectionPolicy() != null) {
                    data.set("k8SEventCollectionPolicy", om.valueToTree(this.getK8SEventCollectionPolicy()));
                }
                if (this.getK8SEventEnabled() != null) {
                    data.set("k8SEventEnabled", om.valueToTree(this.getK8SEventEnabled()));
                }
                if (this.getK8SEventPolicySetting() != null) {
                    data.set("k8SEventPolicySetting", om.valueToTree(this.getK8SEventPolicySetting()));
                }
                if (this.getK8SEventTiEnabled() != null) {
                    data.set("k8SEventTiEnabled", om.valueToTree(this.getK8SEventTiEnabled()));
                }
                if (this.getK8SEventTtl() != null) {
                    data.set("k8SEventTtl", om.valueToTree(this.getK8SEventTtl()));
                }
                if (this.getK8SIngressCollectionPolicy() != null) {
                    data.set("k8SIngressCollectionPolicy", om.valueToTree(this.getK8SIngressCollectionPolicy()));
                }
                if (this.getK8SIngressEnabled() != null) {
                    data.set("k8SIngressEnabled", om.valueToTree(this.getK8SIngressEnabled()));
                }
                if (this.getK8SIngressPolicySetting() != null) {
                    data.set("k8SIngressPolicySetting", om.valueToTree(this.getK8SIngressPolicySetting()));
                }
                if (this.getK8SIngressTiEnabled() != null) {
                    data.set("k8SIngressTiEnabled", om.valueToTree(this.getK8SIngressTiEnabled()));
                }
                if (this.getK8SIngressTtl() != null) {
                    data.set("k8SIngressTtl", om.valueToTree(this.getK8SIngressTtl()));
                }
                if (this.getNasAuditCollectionPolicy() != null) {
                    data.set("nasAuditCollectionPolicy", om.valueToTree(this.getNasAuditCollectionPolicy()));
                }
                if (this.getNasAuditPolicySetting() != null) {
                    data.set("nasAuditPolicySetting", om.valueToTree(this.getNasAuditPolicySetting()));
                }
                if (this.getNasEnabled() != null) {
                    data.set("nasEnabled", om.valueToTree(this.getNasEnabled()));
                }
                if (this.getNasTiEnabled() != null) {
                    data.set("nasTiEnabled", om.valueToTree(this.getNasTiEnabled()));
                }
                if (this.getNasTtl() != null) {
                    data.set("nasTtl", om.valueToTree(this.getNasTtl()));
                }
                if (this.getOssAccessCollectionPolicy() != null) {
                    data.set("ossAccessCollectionPolicy", om.valueToTree(this.getOssAccessCollectionPolicy()));
                }
                if (this.getOssAccessEnabled() != null) {
                    data.set("ossAccessEnabled", om.valueToTree(this.getOssAccessEnabled()));
                }
                if (this.getOssAccessPolicySetting() != null) {
                    data.set("ossAccessPolicySetting", om.valueToTree(this.getOssAccessPolicySetting()));
                }
                if (this.getOssAccessTiEnabled() != null) {
                    data.set("ossAccessTiEnabled", om.valueToTree(this.getOssAccessTiEnabled()));
                }
                if (this.getOssAccessTtl() != null) {
                    data.set("ossAccessTtl", om.valueToTree(this.getOssAccessTtl()));
                }
                if (this.getOssMeteringCollectionPolicy() != null) {
                    data.set("ossMeteringCollectionPolicy", om.valueToTree(this.getOssMeteringCollectionPolicy()));
                }
                if (this.getOssMeteringEnabled() != null) {
                    data.set("ossMeteringEnabled", om.valueToTree(this.getOssMeteringEnabled()));
                }
                if (this.getOssMeteringPolicySetting() != null) {
                    data.set("ossMeteringPolicySetting", om.valueToTree(this.getOssMeteringPolicySetting()));
                }
                if (this.getOssMeteringTiEnabled() != null) {
                    data.set("ossMeteringTiEnabled", om.valueToTree(this.getOssMeteringTiEnabled()));
                }
                if (this.getOssMeteringTtl() != null) {
                    data.set("ossMeteringTtl", om.valueToTree(this.getOssMeteringTtl()));
                }
                if (this.getOssSyncEnabled() != null) {
                    data.set("ossSyncEnabled", om.valueToTree(this.getOssSyncEnabled()));
                }
                if (this.getOssSyncTtl() != null) {
                    data.set("ossSyncTtl", om.valueToTree(this.getOssSyncTtl()));
                }
                if (this.getPolardbAuditCollectionPolicy() != null) {
                    data.set("polardbAuditCollectionPolicy", om.valueToTree(this.getPolardbAuditCollectionPolicy()));
                }
                if (this.getPolardbAuditPolicySetting() != null) {
                    data.set("polardbAuditPolicySetting", om.valueToTree(this.getPolardbAuditPolicySetting()));
                }
                if (this.getPolardbEnabled() != null) {
                    data.set("polardbEnabled", om.valueToTree(this.getPolardbEnabled()));
                }
                if (this.getPolardbPerfCollectionPolicy() != null) {
                    data.set("polardbPerfCollectionPolicy", om.valueToTree(this.getPolardbPerfCollectionPolicy()));
                }
                if (this.getPolardbPerfEnabled() != null) {
                    data.set("polardbPerfEnabled", om.valueToTree(this.getPolardbPerfEnabled()));
                }
                if (this.getPolardbPerfPolicySetting() != null) {
                    data.set("polardbPerfPolicySetting", om.valueToTree(this.getPolardbPerfPolicySetting()));
                }
                if (this.getPolardbPerfTiEnabled() != null) {
                    data.set("polardbPerfTiEnabled", om.valueToTree(this.getPolardbPerfTiEnabled()));
                }
                if (this.getPolardbPerfTtl() != null) {
                    data.set("polardbPerfTtl", om.valueToTree(this.getPolardbPerfTtl()));
                }
                if (this.getPolardbSlowCollectionPolicy() != null) {
                    data.set("polardbSlowCollectionPolicy", om.valueToTree(this.getPolardbSlowCollectionPolicy()));
                }
                if (this.getPolardbSlowEnabled() != null) {
                    data.set("polardbSlowEnabled", om.valueToTree(this.getPolardbSlowEnabled()));
                }
                if (this.getPolardbSlowPolicySetting() != null) {
                    data.set("polardbSlowPolicySetting", om.valueToTree(this.getPolardbSlowPolicySetting()));
                }
                if (this.getPolardbSlowTiEnabled() != null) {
                    data.set("polardbSlowTiEnabled", om.valueToTree(this.getPolardbSlowTiEnabled()));
                }
                if (this.getPolardbSlowTtl() != null) {
                    data.set("polardbSlowTtl", om.valueToTree(this.getPolardbSlowTtl()));
                }
                if (this.getPolardbTiEnabled() != null) {
                    data.set("polardbTiEnabled", om.valueToTree(this.getPolardbTiEnabled()));
                }
                if (this.getPolardbTtl() != null) {
                    data.set("polardbTtl", om.valueToTree(this.getPolardbTtl()));
                }
                if (this.getRdsAuditCollectionPolicy() != null) {
                    data.set("rdsAuditCollectionPolicy", om.valueToTree(this.getRdsAuditCollectionPolicy()));
                }
                if (this.getRdsAuditPolicySetting() != null) {
                    data.set("rdsAuditPolicySetting", om.valueToTree(this.getRdsAuditPolicySetting()));
                }
                if (this.getRdsEnabled() != null) {
                    data.set("rdsEnabled", om.valueToTree(this.getRdsEnabled()));
                }
                if (this.getRdsPerfCollectionPolicy() != null) {
                    data.set("rdsPerfCollectionPolicy", om.valueToTree(this.getRdsPerfCollectionPolicy()));
                }
                if (this.getRdsPerfEnabled() != null) {
                    data.set("rdsPerfEnabled", om.valueToTree(this.getRdsPerfEnabled()));
                }
                if (this.getRdsPerfPolicySetting() != null) {
                    data.set("rdsPerfPolicySetting", om.valueToTree(this.getRdsPerfPolicySetting()));
                }
                if (this.getRdsPerfTiEnabled() != null) {
                    data.set("rdsPerfTiEnabled", om.valueToTree(this.getRdsPerfTiEnabled()));
                }
                if (this.getRdsPerfTtl() != null) {
                    data.set("rdsPerfTtl", om.valueToTree(this.getRdsPerfTtl()));
                }
                if (this.getRdsSlowCollectionPolicy() != null) {
                    data.set("rdsSlowCollectionPolicy", om.valueToTree(this.getRdsSlowCollectionPolicy()));
                }
                if (this.getRdsSlowEnabled() != null) {
                    data.set("rdsSlowEnabled", om.valueToTree(this.getRdsSlowEnabled()));
                }
                if (this.getRdsSlowPolicySetting() != null) {
                    data.set("rdsSlowPolicySetting", om.valueToTree(this.getRdsSlowPolicySetting()));
                }
                if (this.getRdsSlowTiEnabled() != null) {
                    data.set("rdsSlowTiEnabled", om.valueToTree(this.getRdsSlowTiEnabled()));
                }
                if (this.getRdsSlowTtl() != null) {
                    data.set("rdsSlowTtl", om.valueToTree(this.getRdsSlowTtl()));
                }
                if (this.getRdsTiEnabled() != null) {
                    data.set("rdsTiEnabled", om.valueToTree(this.getRdsTiEnabled()));
                }
                if (this.getRdsTtl() != null) {
                    data.set("rdsTtl", om.valueToTree(this.getRdsTtl()));
                }
                if (this.getRedisAuditCollectionPolicy() != null) {
                    data.set("redisAuditCollectionPolicy", om.valueToTree(this.getRedisAuditCollectionPolicy()));
                }
                if (this.getRedisAuditEnabled() != null) {
                    data.set("redisAuditEnabled", om.valueToTree(this.getRedisAuditEnabled()));
                }
                if (this.getRedisAuditPolicySetting() != null) {
                    data.set("redisAuditPolicySetting", om.valueToTree(this.getRedisAuditPolicySetting()));
                }
                if (this.getRedisAuditTiEnabled() != null) {
                    data.set("redisAuditTiEnabled", om.valueToTree(this.getRedisAuditTiEnabled()));
                }
                if (this.getRedisAuditTtl() != null) {
                    data.set("redisAuditTtl", om.valueToTree(this.getRedisAuditTtl()));
                }
                if (this.getRedisSyncEnabled() != null) {
                    data.set("redisSyncEnabled", om.valueToTree(this.getRedisSyncEnabled()));
                }
                if (this.getRedisSyncTtl() != null) {
                    data.set("redisSyncTtl", om.valueToTree(this.getRedisSyncTtl()));
                }
                if (this.getSasCrackEnabled() != null) {
                    data.set("sasCrackEnabled", om.valueToTree(this.getSasCrackEnabled()));
                }
                if (this.getSasDnsEnabled() != null) {
                    data.set("sasDnsEnabled", om.valueToTree(this.getSasDnsEnabled()));
                }
                if (this.getSasHttpEnabled() != null) {
                    data.set("sasHttpEnabled", om.valueToTree(this.getSasHttpEnabled()));
                }
                if (this.getSasLocalDnsEnabled() != null) {
                    data.set("sasLocalDnsEnabled", om.valueToTree(this.getSasLocalDnsEnabled()));
                }
                if (this.getSasLoginEnabled() != null) {
                    data.set("sasLoginEnabled", om.valueToTree(this.getSasLoginEnabled()));
                }
                if (this.getSasNetworkEnabled() != null) {
                    data.set("sasNetworkEnabled", om.valueToTree(this.getSasNetworkEnabled()));
                }
                if (this.getSasProcessEnabled() != null) {
                    data.set("sasProcessEnabled", om.valueToTree(this.getSasProcessEnabled()));
                }
                if (this.getSasSecurityAlertEnabled() != null) {
                    data.set("sasSecurityAlertEnabled", om.valueToTree(this.getSasSecurityAlertEnabled()));
                }
                if (this.getSasSecurityHcEnabled() != null) {
                    data.set("sasSecurityHcEnabled", om.valueToTree(this.getSasSecurityHcEnabled()));
                }
                if (this.getSasSecurityVulEnabled() != null) {
                    data.set("sasSecurityVulEnabled", om.valueToTree(this.getSasSecurityVulEnabled()));
                }
                if (this.getSasSessionEnabled() != null) {
                    data.set("sasSessionEnabled", om.valueToTree(this.getSasSessionEnabled()));
                }
                if (this.getSasSnapshotAccountEnabled() != null) {
                    data.set("sasSnapshotAccountEnabled", om.valueToTree(this.getSasSnapshotAccountEnabled()));
                }
                if (this.getSasSnapshotPortEnabled() != null) {
                    data.set("sasSnapshotPortEnabled", om.valueToTree(this.getSasSnapshotPortEnabled()));
                }
                if (this.getSasSnapshotProcessEnabled() != null) {
                    data.set("sasSnapshotProcessEnabled", om.valueToTree(this.getSasSnapshotProcessEnabled()));
                }
                if (this.getSasTiEnabled() != null) {
                    data.set("sasTiEnabled", om.valueToTree(this.getSasTiEnabled()));
                }
                if (this.getSasTtl() != null) {
                    data.set("sasTtl", om.valueToTree(this.getSasTtl()));
                }
                if (this.getSlbAccessCollectionPolicy() != null) {
                    data.set("slbAccessCollectionPolicy", om.valueToTree(this.getSlbAccessCollectionPolicy()));
                }
                if (this.getSlbAccessEnabled() != null) {
                    data.set("slbAccessEnabled", om.valueToTree(this.getSlbAccessEnabled()));
                }
                if (this.getSlbAccessPolicySetting() != null) {
                    data.set("slbAccessPolicySetting", om.valueToTree(this.getSlbAccessPolicySetting()));
                }
                if (this.getSlbAccessTiEnabled() != null) {
                    data.set("slbAccessTiEnabled", om.valueToTree(this.getSlbAccessTiEnabled()));
                }
                if (this.getSlbAccessTtl() != null) {
                    data.set("slbAccessTtl", om.valueToTree(this.getSlbAccessTtl()));
                }
                if (this.getSlbSyncEnabled() != null) {
                    data.set("slbSyncEnabled", om.valueToTree(this.getSlbSyncEnabled()));
                }
                if (this.getSlbSyncTtl() != null) {
                    data.set("slbSyncTtl", om.valueToTree(this.getSlbSyncTtl()));
                }
                if (this.getWafAccessCollectionPolicy() != null) {
                    data.set("wafAccessCollectionPolicy", om.valueToTree(this.getWafAccessCollectionPolicy()));
                }
                if (this.getWafAccessPolicySetting() != null) {
                    data.set("wafAccessPolicySetting", om.valueToTree(this.getWafAccessPolicySetting()));
                }
                if (this.getWafEnabled() != null) {
                    data.set("wafEnabled", om.valueToTree(this.getWafEnabled()));
                }
                if (this.getWafTiEnabled() != null) {
                    data.set("wafTiEnabled", om.valueToTree(this.getWafTiEnabled()));
                }
                if (this.getWafTtl() != null) {
                    data.set("wafTtl", om.valueToTree(this.getWafTtl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VariableMapProperty.Jsii$Proxy that = (VariableMapProperty.Jsii$Proxy) o;

                if (this.actiontrailEnabled != null ? !this.actiontrailEnabled.equals(that.actiontrailEnabled) : that.actiontrailEnabled != null) return false;
                if (this.actiontrailOpenapiCollectionPolicy != null ? !this.actiontrailOpenapiCollectionPolicy.equals(that.actiontrailOpenapiCollectionPolicy) : that.actiontrailOpenapiCollectionPolicy != null) return false;
                if (this.actiontrailOpenapiPolicySetting != null ? !this.actiontrailOpenapiPolicySetting.equals(that.actiontrailOpenapiPolicySetting) : that.actiontrailOpenapiPolicySetting != null) return false;
                if (this.actiontrailTiEnabled != null ? !this.actiontrailTiEnabled.equals(that.actiontrailTiEnabled) : that.actiontrailTiEnabled != null) return false;
                if (this.actiontrailTtl != null ? !this.actiontrailTtl.equals(that.actiontrailTtl) : that.actiontrailTtl != null) return false;
                if (this.apigatewayAccessCollectionPolicy != null ? !this.apigatewayAccessCollectionPolicy.equals(that.apigatewayAccessCollectionPolicy) : that.apigatewayAccessCollectionPolicy != null) return false;
                if (this.apigatewayAccessPolicySetting != null ? !this.apigatewayAccessPolicySetting.equals(that.apigatewayAccessPolicySetting) : that.apigatewayAccessPolicySetting != null) return false;
                if (this.apigatewayEnabled != null ? !this.apigatewayEnabled.equals(that.apigatewayEnabled) : that.apigatewayEnabled != null) return false;
                if (this.apigatewayTiEnabled != null ? !this.apigatewayTiEnabled.equals(that.apigatewayTiEnabled) : that.apigatewayTiEnabled != null) return false;
                if (this.apigatewayTtl != null ? !this.apigatewayTtl.equals(that.apigatewayTtl) : that.apigatewayTtl != null) return false;
                if (this.appconnectEnabled != null ? !this.appconnectEnabled.equals(that.appconnectEnabled) : that.appconnectEnabled != null) return false;
                if (this.appconnectOpCollectionPolicy != null ? !this.appconnectOpCollectionPolicy.equals(that.appconnectOpCollectionPolicy) : that.appconnectOpCollectionPolicy != null) return false;
                if (this.appconnectOpPolicySetting != null ? !this.appconnectOpPolicySetting.equals(that.appconnectOpPolicySetting) : that.appconnectOpPolicySetting != null) return false;
                if (this.appconnectTiEnabled != null ? !this.appconnectTiEnabled.equals(that.appconnectTiEnabled) : that.appconnectTiEnabled != null) return false;
                if (this.appconnectTtl != null ? !this.appconnectTtl.equals(that.appconnectTtl) : that.appconnectTtl != null) return false;
                if (this.bastionAuditCollectionPolicy != null ? !this.bastionAuditCollectionPolicy.equals(that.bastionAuditCollectionPolicy) : that.bastionAuditCollectionPolicy != null) return false;
                if (this.bastionAuditPolicySetting != null ? !this.bastionAuditPolicySetting.equals(that.bastionAuditPolicySetting) : that.bastionAuditPolicySetting != null) return false;
                if (this.bastionEnabled != null ? !this.bastionEnabled.equals(that.bastionEnabled) : that.bastionEnabled != null) return false;
                if (this.bastionTiEnabled != null ? !this.bastionTiEnabled.equals(that.bastionTiEnabled) : that.bastionTiEnabled != null) return false;
                if (this.bastionTtl != null ? !this.bastionTtl.equals(that.bastionTtl) : that.bastionTtl != null) return false;
                if (this.cloudfirewallAccessCollectionPolicy != null ? !this.cloudfirewallAccessCollectionPolicy.equals(that.cloudfirewallAccessCollectionPolicy) : that.cloudfirewallAccessCollectionPolicy != null) return false;
                if (this.cloudfirewallAccessPolicySetting != null ? !this.cloudfirewallAccessPolicySetting.equals(that.cloudfirewallAccessPolicySetting) : that.cloudfirewallAccessPolicySetting != null) return false;
                if (this.cloudfirewallEnabled != null ? !this.cloudfirewallEnabled.equals(that.cloudfirewallEnabled) : that.cloudfirewallEnabled != null) return false;
                if (this.cloudfirewallTiEnabled != null ? !this.cloudfirewallTiEnabled.equals(that.cloudfirewallTiEnabled) : that.cloudfirewallTiEnabled != null) return false;
                if (this.cloudfirewallTtl != null ? !this.cloudfirewallTtl.equals(that.cloudfirewallTtl) : that.cloudfirewallTtl != null) return false;
                if (this.cpsCallbackCollectionPolicy != null ? !this.cpsCallbackCollectionPolicy.equals(that.cpsCallbackCollectionPolicy) : that.cpsCallbackCollectionPolicy != null) return false;
                if (this.cpsCallbackPolicySetting != null ? !this.cpsCallbackPolicySetting.equals(that.cpsCallbackPolicySetting) : that.cpsCallbackPolicySetting != null) return false;
                if (this.cpsEnabled != null ? !this.cpsEnabled.equals(that.cpsEnabled) : that.cpsEnabled != null) return false;
                if (this.cpsTiEnabled != null ? !this.cpsTiEnabled.equals(that.cpsTiEnabled) : that.cpsTiEnabled != null) return false;
                if (this.cpsTtl != null ? !this.cpsTtl.equals(that.cpsTtl) : that.cpsTtl != null) return false;
                if (this.ddosCooAccessCollectionPolicy != null ? !this.ddosCooAccessCollectionPolicy.equals(that.ddosCooAccessCollectionPolicy) : that.ddosCooAccessCollectionPolicy != null) return false;
                if (this.ddosCooAccessEnabled != null ? !this.ddosCooAccessEnabled.equals(that.ddosCooAccessEnabled) : that.ddosCooAccessEnabled != null) return false;
                if (this.ddosCooAccessPolicySetting != null ? !this.ddosCooAccessPolicySetting.equals(that.ddosCooAccessPolicySetting) : that.ddosCooAccessPolicySetting != null) return false;
                if (this.ddosCooAccessTiEnabled != null ? !this.ddosCooAccessTiEnabled.equals(that.ddosCooAccessTiEnabled) : that.ddosCooAccessTiEnabled != null) return false;
                if (this.ddosCooAccessTtl != null ? !this.ddosCooAccessTtl.equals(that.ddosCooAccessTtl) : that.ddosCooAccessTtl != null) return false;
                if (this.drdsAuditCollectionPolicy != null ? !this.drdsAuditCollectionPolicy.equals(that.drdsAuditCollectionPolicy) : that.drdsAuditCollectionPolicy != null) return false;
                if (this.drdsAuditEnabled != null ? !this.drdsAuditEnabled.equals(that.drdsAuditEnabled) : that.drdsAuditEnabled != null) return false;
                if (this.drdsAuditPolicySetting != null ? !this.drdsAuditPolicySetting.equals(that.drdsAuditPolicySetting) : that.drdsAuditPolicySetting != null) return false;
                if (this.drdsAuditTiEnabled != null ? !this.drdsAuditTiEnabled.equals(that.drdsAuditTiEnabled) : that.drdsAuditTiEnabled != null) return false;
                if (this.drdsAuditTtl != null ? !this.drdsAuditTtl.equals(that.drdsAuditTtl) : that.drdsAuditTtl != null) return false;
                if (this.drdsSyncEnabled != null ? !this.drdsSyncEnabled.equals(that.drdsSyncEnabled) : that.drdsSyncEnabled != null) return false;
                if (this.drdsSyncTtl != null ? !this.drdsSyncTtl.equals(that.drdsSyncTtl) : that.drdsSyncTtl != null) return false;
                if (this.k8SAuditCollectionPolicy != null ? !this.k8SAuditCollectionPolicy.equals(that.k8SAuditCollectionPolicy) : that.k8SAuditCollectionPolicy != null) return false;
                if (this.k8SAuditEnabled != null ? !this.k8SAuditEnabled.equals(that.k8SAuditEnabled) : that.k8SAuditEnabled != null) return false;
                if (this.k8SAuditPolicySetting != null ? !this.k8SAuditPolicySetting.equals(that.k8SAuditPolicySetting) : that.k8SAuditPolicySetting != null) return false;
                if (this.k8SAuditTiEnabled != null ? !this.k8SAuditTiEnabled.equals(that.k8SAuditTiEnabled) : that.k8SAuditTiEnabled != null) return false;
                if (this.k8SAuditTtl != null ? !this.k8SAuditTtl.equals(that.k8SAuditTtl) : that.k8SAuditTtl != null) return false;
                if (this.k8SEventCollectionPolicy != null ? !this.k8SEventCollectionPolicy.equals(that.k8SEventCollectionPolicy) : that.k8SEventCollectionPolicy != null) return false;
                if (this.k8SEventEnabled != null ? !this.k8SEventEnabled.equals(that.k8SEventEnabled) : that.k8SEventEnabled != null) return false;
                if (this.k8SEventPolicySetting != null ? !this.k8SEventPolicySetting.equals(that.k8SEventPolicySetting) : that.k8SEventPolicySetting != null) return false;
                if (this.k8SEventTiEnabled != null ? !this.k8SEventTiEnabled.equals(that.k8SEventTiEnabled) : that.k8SEventTiEnabled != null) return false;
                if (this.k8SEventTtl != null ? !this.k8SEventTtl.equals(that.k8SEventTtl) : that.k8SEventTtl != null) return false;
                if (this.k8SIngressCollectionPolicy != null ? !this.k8SIngressCollectionPolicy.equals(that.k8SIngressCollectionPolicy) : that.k8SIngressCollectionPolicy != null) return false;
                if (this.k8SIngressEnabled != null ? !this.k8SIngressEnabled.equals(that.k8SIngressEnabled) : that.k8SIngressEnabled != null) return false;
                if (this.k8SIngressPolicySetting != null ? !this.k8SIngressPolicySetting.equals(that.k8SIngressPolicySetting) : that.k8SIngressPolicySetting != null) return false;
                if (this.k8SIngressTiEnabled != null ? !this.k8SIngressTiEnabled.equals(that.k8SIngressTiEnabled) : that.k8SIngressTiEnabled != null) return false;
                if (this.k8SIngressTtl != null ? !this.k8SIngressTtl.equals(that.k8SIngressTtl) : that.k8SIngressTtl != null) return false;
                if (this.nasAuditCollectionPolicy != null ? !this.nasAuditCollectionPolicy.equals(that.nasAuditCollectionPolicy) : that.nasAuditCollectionPolicy != null) return false;
                if (this.nasAuditPolicySetting != null ? !this.nasAuditPolicySetting.equals(that.nasAuditPolicySetting) : that.nasAuditPolicySetting != null) return false;
                if (this.nasEnabled != null ? !this.nasEnabled.equals(that.nasEnabled) : that.nasEnabled != null) return false;
                if (this.nasTiEnabled != null ? !this.nasTiEnabled.equals(that.nasTiEnabled) : that.nasTiEnabled != null) return false;
                if (this.nasTtl != null ? !this.nasTtl.equals(that.nasTtl) : that.nasTtl != null) return false;
                if (this.ossAccessCollectionPolicy != null ? !this.ossAccessCollectionPolicy.equals(that.ossAccessCollectionPolicy) : that.ossAccessCollectionPolicy != null) return false;
                if (this.ossAccessEnabled != null ? !this.ossAccessEnabled.equals(that.ossAccessEnabled) : that.ossAccessEnabled != null) return false;
                if (this.ossAccessPolicySetting != null ? !this.ossAccessPolicySetting.equals(that.ossAccessPolicySetting) : that.ossAccessPolicySetting != null) return false;
                if (this.ossAccessTiEnabled != null ? !this.ossAccessTiEnabled.equals(that.ossAccessTiEnabled) : that.ossAccessTiEnabled != null) return false;
                if (this.ossAccessTtl != null ? !this.ossAccessTtl.equals(that.ossAccessTtl) : that.ossAccessTtl != null) return false;
                if (this.ossMeteringCollectionPolicy != null ? !this.ossMeteringCollectionPolicy.equals(that.ossMeteringCollectionPolicy) : that.ossMeteringCollectionPolicy != null) return false;
                if (this.ossMeteringEnabled != null ? !this.ossMeteringEnabled.equals(that.ossMeteringEnabled) : that.ossMeteringEnabled != null) return false;
                if (this.ossMeteringPolicySetting != null ? !this.ossMeteringPolicySetting.equals(that.ossMeteringPolicySetting) : that.ossMeteringPolicySetting != null) return false;
                if (this.ossMeteringTiEnabled != null ? !this.ossMeteringTiEnabled.equals(that.ossMeteringTiEnabled) : that.ossMeteringTiEnabled != null) return false;
                if (this.ossMeteringTtl != null ? !this.ossMeteringTtl.equals(that.ossMeteringTtl) : that.ossMeteringTtl != null) return false;
                if (this.ossSyncEnabled != null ? !this.ossSyncEnabled.equals(that.ossSyncEnabled) : that.ossSyncEnabled != null) return false;
                if (this.ossSyncTtl != null ? !this.ossSyncTtl.equals(that.ossSyncTtl) : that.ossSyncTtl != null) return false;
                if (this.polardbAuditCollectionPolicy != null ? !this.polardbAuditCollectionPolicy.equals(that.polardbAuditCollectionPolicy) : that.polardbAuditCollectionPolicy != null) return false;
                if (this.polardbAuditPolicySetting != null ? !this.polardbAuditPolicySetting.equals(that.polardbAuditPolicySetting) : that.polardbAuditPolicySetting != null) return false;
                if (this.polardbEnabled != null ? !this.polardbEnabled.equals(that.polardbEnabled) : that.polardbEnabled != null) return false;
                if (this.polardbPerfCollectionPolicy != null ? !this.polardbPerfCollectionPolicy.equals(that.polardbPerfCollectionPolicy) : that.polardbPerfCollectionPolicy != null) return false;
                if (this.polardbPerfEnabled != null ? !this.polardbPerfEnabled.equals(that.polardbPerfEnabled) : that.polardbPerfEnabled != null) return false;
                if (this.polardbPerfPolicySetting != null ? !this.polardbPerfPolicySetting.equals(that.polardbPerfPolicySetting) : that.polardbPerfPolicySetting != null) return false;
                if (this.polardbPerfTiEnabled != null ? !this.polardbPerfTiEnabled.equals(that.polardbPerfTiEnabled) : that.polardbPerfTiEnabled != null) return false;
                if (this.polardbPerfTtl != null ? !this.polardbPerfTtl.equals(that.polardbPerfTtl) : that.polardbPerfTtl != null) return false;
                if (this.polardbSlowCollectionPolicy != null ? !this.polardbSlowCollectionPolicy.equals(that.polardbSlowCollectionPolicy) : that.polardbSlowCollectionPolicy != null) return false;
                if (this.polardbSlowEnabled != null ? !this.polardbSlowEnabled.equals(that.polardbSlowEnabled) : that.polardbSlowEnabled != null) return false;
                if (this.polardbSlowPolicySetting != null ? !this.polardbSlowPolicySetting.equals(that.polardbSlowPolicySetting) : that.polardbSlowPolicySetting != null) return false;
                if (this.polardbSlowTiEnabled != null ? !this.polardbSlowTiEnabled.equals(that.polardbSlowTiEnabled) : that.polardbSlowTiEnabled != null) return false;
                if (this.polardbSlowTtl != null ? !this.polardbSlowTtl.equals(that.polardbSlowTtl) : that.polardbSlowTtl != null) return false;
                if (this.polardbTiEnabled != null ? !this.polardbTiEnabled.equals(that.polardbTiEnabled) : that.polardbTiEnabled != null) return false;
                if (this.polardbTtl != null ? !this.polardbTtl.equals(that.polardbTtl) : that.polardbTtl != null) return false;
                if (this.rdsAuditCollectionPolicy != null ? !this.rdsAuditCollectionPolicy.equals(that.rdsAuditCollectionPolicy) : that.rdsAuditCollectionPolicy != null) return false;
                if (this.rdsAuditPolicySetting != null ? !this.rdsAuditPolicySetting.equals(that.rdsAuditPolicySetting) : that.rdsAuditPolicySetting != null) return false;
                if (this.rdsEnabled != null ? !this.rdsEnabled.equals(that.rdsEnabled) : that.rdsEnabled != null) return false;
                if (this.rdsPerfCollectionPolicy != null ? !this.rdsPerfCollectionPolicy.equals(that.rdsPerfCollectionPolicy) : that.rdsPerfCollectionPolicy != null) return false;
                if (this.rdsPerfEnabled != null ? !this.rdsPerfEnabled.equals(that.rdsPerfEnabled) : that.rdsPerfEnabled != null) return false;
                if (this.rdsPerfPolicySetting != null ? !this.rdsPerfPolicySetting.equals(that.rdsPerfPolicySetting) : that.rdsPerfPolicySetting != null) return false;
                if (this.rdsPerfTiEnabled != null ? !this.rdsPerfTiEnabled.equals(that.rdsPerfTiEnabled) : that.rdsPerfTiEnabled != null) return false;
                if (this.rdsPerfTtl != null ? !this.rdsPerfTtl.equals(that.rdsPerfTtl) : that.rdsPerfTtl != null) return false;
                if (this.rdsSlowCollectionPolicy != null ? !this.rdsSlowCollectionPolicy.equals(that.rdsSlowCollectionPolicy) : that.rdsSlowCollectionPolicy != null) return false;
                if (this.rdsSlowEnabled != null ? !this.rdsSlowEnabled.equals(that.rdsSlowEnabled) : that.rdsSlowEnabled != null) return false;
                if (this.rdsSlowPolicySetting != null ? !this.rdsSlowPolicySetting.equals(that.rdsSlowPolicySetting) : that.rdsSlowPolicySetting != null) return false;
                if (this.rdsSlowTiEnabled != null ? !this.rdsSlowTiEnabled.equals(that.rdsSlowTiEnabled) : that.rdsSlowTiEnabled != null) return false;
                if (this.rdsSlowTtl != null ? !this.rdsSlowTtl.equals(that.rdsSlowTtl) : that.rdsSlowTtl != null) return false;
                if (this.rdsTiEnabled != null ? !this.rdsTiEnabled.equals(that.rdsTiEnabled) : that.rdsTiEnabled != null) return false;
                if (this.rdsTtl != null ? !this.rdsTtl.equals(that.rdsTtl) : that.rdsTtl != null) return false;
                if (this.redisAuditCollectionPolicy != null ? !this.redisAuditCollectionPolicy.equals(that.redisAuditCollectionPolicy) : that.redisAuditCollectionPolicy != null) return false;
                if (this.redisAuditEnabled != null ? !this.redisAuditEnabled.equals(that.redisAuditEnabled) : that.redisAuditEnabled != null) return false;
                if (this.redisAuditPolicySetting != null ? !this.redisAuditPolicySetting.equals(that.redisAuditPolicySetting) : that.redisAuditPolicySetting != null) return false;
                if (this.redisAuditTiEnabled != null ? !this.redisAuditTiEnabled.equals(that.redisAuditTiEnabled) : that.redisAuditTiEnabled != null) return false;
                if (this.redisAuditTtl != null ? !this.redisAuditTtl.equals(that.redisAuditTtl) : that.redisAuditTtl != null) return false;
                if (this.redisSyncEnabled != null ? !this.redisSyncEnabled.equals(that.redisSyncEnabled) : that.redisSyncEnabled != null) return false;
                if (this.redisSyncTtl != null ? !this.redisSyncTtl.equals(that.redisSyncTtl) : that.redisSyncTtl != null) return false;
                if (this.sasCrackEnabled != null ? !this.sasCrackEnabled.equals(that.sasCrackEnabled) : that.sasCrackEnabled != null) return false;
                if (this.sasDnsEnabled != null ? !this.sasDnsEnabled.equals(that.sasDnsEnabled) : that.sasDnsEnabled != null) return false;
                if (this.sasHttpEnabled != null ? !this.sasHttpEnabled.equals(that.sasHttpEnabled) : that.sasHttpEnabled != null) return false;
                if (this.sasLocalDnsEnabled != null ? !this.sasLocalDnsEnabled.equals(that.sasLocalDnsEnabled) : that.sasLocalDnsEnabled != null) return false;
                if (this.sasLoginEnabled != null ? !this.sasLoginEnabled.equals(that.sasLoginEnabled) : that.sasLoginEnabled != null) return false;
                if (this.sasNetworkEnabled != null ? !this.sasNetworkEnabled.equals(that.sasNetworkEnabled) : that.sasNetworkEnabled != null) return false;
                if (this.sasProcessEnabled != null ? !this.sasProcessEnabled.equals(that.sasProcessEnabled) : that.sasProcessEnabled != null) return false;
                if (this.sasSecurityAlertEnabled != null ? !this.sasSecurityAlertEnabled.equals(that.sasSecurityAlertEnabled) : that.sasSecurityAlertEnabled != null) return false;
                if (this.sasSecurityHcEnabled != null ? !this.sasSecurityHcEnabled.equals(that.sasSecurityHcEnabled) : that.sasSecurityHcEnabled != null) return false;
                if (this.sasSecurityVulEnabled != null ? !this.sasSecurityVulEnabled.equals(that.sasSecurityVulEnabled) : that.sasSecurityVulEnabled != null) return false;
                if (this.sasSessionEnabled != null ? !this.sasSessionEnabled.equals(that.sasSessionEnabled) : that.sasSessionEnabled != null) return false;
                if (this.sasSnapshotAccountEnabled != null ? !this.sasSnapshotAccountEnabled.equals(that.sasSnapshotAccountEnabled) : that.sasSnapshotAccountEnabled != null) return false;
                if (this.sasSnapshotPortEnabled != null ? !this.sasSnapshotPortEnabled.equals(that.sasSnapshotPortEnabled) : that.sasSnapshotPortEnabled != null) return false;
                if (this.sasSnapshotProcessEnabled != null ? !this.sasSnapshotProcessEnabled.equals(that.sasSnapshotProcessEnabled) : that.sasSnapshotProcessEnabled != null) return false;
                if (this.sasTiEnabled != null ? !this.sasTiEnabled.equals(that.sasTiEnabled) : that.sasTiEnabled != null) return false;
                if (this.sasTtl != null ? !this.sasTtl.equals(that.sasTtl) : that.sasTtl != null) return false;
                if (this.slbAccessCollectionPolicy != null ? !this.slbAccessCollectionPolicy.equals(that.slbAccessCollectionPolicy) : that.slbAccessCollectionPolicy != null) return false;
                if (this.slbAccessEnabled != null ? !this.slbAccessEnabled.equals(that.slbAccessEnabled) : that.slbAccessEnabled != null) return false;
                if (this.slbAccessPolicySetting != null ? !this.slbAccessPolicySetting.equals(that.slbAccessPolicySetting) : that.slbAccessPolicySetting != null) return false;
                if (this.slbAccessTiEnabled != null ? !this.slbAccessTiEnabled.equals(that.slbAccessTiEnabled) : that.slbAccessTiEnabled != null) return false;
                if (this.slbAccessTtl != null ? !this.slbAccessTtl.equals(that.slbAccessTtl) : that.slbAccessTtl != null) return false;
                if (this.slbSyncEnabled != null ? !this.slbSyncEnabled.equals(that.slbSyncEnabled) : that.slbSyncEnabled != null) return false;
                if (this.slbSyncTtl != null ? !this.slbSyncTtl.equals(that.slbSyncTtl) : that.slbSyncTtl != null) return false;
                if (this.wafAccessCollectionPolicy != null ? !this.wafAccessCollectionPolicy.equals(that.wafAccessCollectionPolicy) : that.wafAccessCollectionPolicy != null) return false;
                if (this.wafAccessPolicySetting != null ? !this.wafAccessPolicySetting.equals(that.wafAccessPolicySetting) : that.wafAccessPolicySetting != null) return false;
                if (this.wafEnabled != null ? !this.wafEnabled.equals(that.wafEnabled) : that.wafEnabled != null) return false;
                if (this.wafTiEnabled != null ? !this.wafTiEnabled.equals(that.wafTiEnabled) : that.wafTiEnabled != null) return false;
                return this.wafTtl != null ? this.wafTtl.equals(that.wafTtl) : that.wafTtl == null;
            }

            @Override
            public final int hashCode() {
                int result = this.actiontrailEnabled != null ? this.actiontrailEnabled.hashCode() : 0;
                result = 31 * result + (this.actiontrailOpenapiCollectionPolicy != null ? this.actiontrailOpenapiCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.actiontrailOpenapiPolicySetting != null ? this.actiontrailOpenapiPolicySetting.hashCode() : 0);
                result = 31 * result + (this.actiontrailTiEnabled != null ? this.actiontrailTiEnabled.hashCode() : 0);
                result = 31 * result + (this.actiontrailTtl != null ? this.actiontrailTtl.hashCode() : 0);
                result = 31 * result + (this.apigatewayAccessCollectionPolicy != null ? this.apigatewayAccessCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.apigatewayAccessPolicySetting != null ? this.apigatewayAccessPolicySetting.hashCode() : 0);
                result = 31 * result + (this.apigatewayEnabled != null ? this.apigatewayEnabled.hashCode() : 0);
                result = 31 * result + (this.apigatewayTiEnabled != null ? this.apigatewayTiEnabled.hashCode() : 0);
                result = 31 * result + (this.apigatewayTtl != null ? this.apigatewayTtl.hashCode() : 0);
                result = 31 * result + (this.appconnectEnabled != null ? this.appconnectEnabled.hashCode() : 0);
                result = 31 * result + (this.appconnectOpCollectionPolicy != null ? this.appconnectOpCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.appconnectOpPolicySetting != null ? this.appconnectOpPolicySetting.hashCode() : 0);
                result = 31 * result + (this.appconnectTiEnabled != null ? this.appconnectTiEnabled.hashCode() : 0);
                result = 31 * result + (this.appconnectTtl != null ? this.appconnectTtl.hashCode() : 0);
                result = 31 * result + (this.bastionAuditCollectionPolicy != null ? this.bastionAuditCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.bastionAuditPolicySetting != null ? this.bastionAuditPolicySetting.hashCode() : 0);
                result = 31 * result + (this.bastionEnabled != null ? this.bastionEnabled.hashCode() : 0);
                result = 31 * result + (this.bastionTiEnabled != null ? this.bastionTiEnabled.hashCode() : 0);
                result = 31 * result + (this.bastionTtl != null ? this.bastionTtl.hashCode() : 0);
                result = 31 * result + (this.cloudfirewallAccessCollectionPolicy != null ? this.cloudfirewallAccessCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.cloudfirewallAccessPolicySetting != null ? this.cloudfirewallAccessPolicySetting.hashCode() : 0);
                result = 31 * result + (this.cloudfirewallEnabled != null ? this.cloudfirewallEnabled.hashCode() : 0);
                result = 31 * result + (this.cloudfirewallTiEnabled != null ? this.cloudfirewallTiEnabled.hashCode() : 0);
                result = 31 * result + (this.cloudfirewallTtl != null ? this.cloudfirewallTtl.hashCode() : 0);
                result = 31 * result + (this.cpsCallbackCollectionPolicy != null ? this.cpsCallbackCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.cpsCallbackPolicySetting != null ? this.cpsCallbackPolicySetting.hashCode() : 0);
                result = 31 * result + (this.cpsEnabled != null ? this.cpsEnabled.hashCode() : 0);
                result = 31 * result + (this.cpsTiEnabled != null ? this.cpsTiEnabled.hashCode() : 0);
                result = 31 * result + (this.cpsTtl != null ? this.cpsTtl.hashCode() : 0);
                result = 31 * result + (this.ddosCooAccessCollectionPolicy != null ? this.ddosCooAccessCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.ddosCooAccessEnabled != null ? this.ddosCooAccessEnabled.hashCode() : 0);
                result = 31 * result + (this.ddosCooAccessPolicySetting != null ? this.ddosCooAccessPolicySetting.hashCode() : 0);
                result = 31 * result + (this.ddosCooAccessTiEnabled != null ? this.ddosCooAccessTiEnabled.hashCode() : 0);
                result = 31 * result + (this.ddosCooAccessTtl != null ? this.ddosCooAccessTtl.hashCode() : 0);
                result = 31 * result + (this.drdsAuditCollectionPolicy != null ? this.drdsAuditCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.drdsAuditEnabled != null ? this.drdsAuditEnabled.hashCode() : 0);
                result = 31 * result + (this.drdsAuditPolicySetting != null ? this.drdsAuditPolicySetting.hashCode() : 0);
                result = 31 * result + (this.drdsAuditTiEnabled != null ? this.drdsAuditTiEnabled.hashCode() : 0);
                result = 31 * result + (this.drdsAuditTtl != null ? this.drdsAuditTtl.hashCode() : 0);
                result = 31 * result + (this.drdsSyncEnabled != null ? this.drdsSyncEnabled.hashCode() : 0);
                result = 31 * result + (this.drdsSyncTtl != null ? this.drdsSyncTtl.hashCode() : 0);
                result = 31 * result + (this.k8SAuditCollectionPolicy != null ? this.k8SAuditCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.k8SAuditEnabled != null ? this.k8SAuditEnabled.hashCode() : 0);
                result = 31 * result + (this.k8SAuditPolicySetting != null ? this.k8SAuditPolicySetting.hashCode() : 0);
                result = 31 * result + (this.k8SAuditTiEnabled != null ? this.k8SAuditTiEnabled.hashCode() : 0);
                result = 31 * result + (this.k8SAuditTtl != null ? this.k8SAuditTtl.hashCode() : 0);
                result = 31 * result + (this.k8SEventCollectionPolicy != null ? this.k8SEventCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.k8SEventEnabled != null ? this.k8SEventEnabled.hashCode() : 0);
                result = 31 * result + (this.k8SEventPolicySetting != null ? this.k8SEventPolicySetting.hashCode() : 0);
                result = 31 * result + (this.k8SEventTiEnabled != null ? this.k8SEventTiEnabled.hashCode() : 0);
                result = 31 * result + (this.k8SEventTtl != null ? this.k8SEventTtl.hashCode() : 0);
                result = 31 * result + (this.k8SIngressCollectionPolicy != null ? this.k8SIngressCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.k8SIngressEnabled != null ? this.k8SIngressEnabled.hashCode() : 0);
                result = 31 * result + (this.k8SIngressPolicySetting != null ? this.k8SIngressPolicySetting.hashCode() : 0);
                result = 31 * result + (this.k8SIngressTiEnabled != null ? this.k8SIngressTiEnabled.hashCode() : 0);
                result = 31 * result + (this.k8SIngressTtl != null ? this.k8SIngressTtl.hashCode() : 0);
                result = 31 * result + (this.nasAuditCollectionPolicy != null ? this.nasAuditCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.nasAuditPolicySetting != null ? this.nasAuditPolicySetting.hashCode() : 0);
                result = 31 * result + (this.nasEnabled != null ? this.nasEnabled.hashCode() : 0);
                result = 31 * result + (this.nasTiEnabled != null ? this.nasTiEnabled.hashCode() : 0);
                result = 31 * result + (this.nasTtl != null ? this.nasTtl.hashCode() : 0);
                result = 31 * result + (this.ossAccessCollectionPolicy != null ? this.ossAccessCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.ossAccessEnabled != null ? this.ossAccessEnabled.hashCode() : 0);
                result = 31 * result + (this.ossAccessPolicySetting != null ? this.ossAccessPolicySetting.hashCode() : 0);
                result = 31 * result + (this.ossAccessTiEnabled != null ? this.ossAccessTiEnabled.hashCode() : 0);
                result = 31 * result + (this.ossAccessTtl != null ? this.ossAccessTtl.hashCode() : 0);
                result = 31 * result + (this.ossMeteringCollectionPolicy != null ? this.ossMeteringCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.ossMeteringEnabled != null ? this.ossMeteringEnabled.hashCode() : 0);
                result = 31 * result + (this.ossMeteringPolicySetting != null ? this.ossMeteringPolicySetting.hashCode() : 0);
                result = 31 * result + (this.ossMeteringTiEnabled != null ? this.ossMeteringTiEnabled.hashCode() : 0);
                result = 31 * result + (this.ossMeteringTtl != null ? this.ossMeteringTtl.hashCode() : 0);
                result = 31 * result + (this.ossSyncEnabled != null ? this.ossSyncEnabled.hashCode() : 0);
                result = 31 * result + (this.ossSyncTtl != null ? this.ossSyncTtl.hashCode() : 0);
                result = 31 * result + (this.polardbAuditCollectionPolicy != null ? this.polardbAuditCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.polardbAuditPolicySetting != null ? this.polardbAuditPolicySetting.hashCode() : 0);
                result = 31 * result + (this.polardbEnabled != null ? this.polardbEnabled.hashCode() : 0);
                result = 31 * result + (this.polardbPerfCollectionPolicy != null ? this.polardbPerfCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.polardbPerfEnabled != null ? this.polardbPerfEnabled.hashCode() : 0);
                result = 31 * result + (this.polardbPerfPolicySetting != null ? this.polardbPerfPolicySetting.hashCode() : 0);
                result = 31 * result + (this.polardbPerfTiEnabled != null ? this.polardbPerfTiEnabled.hashCode() : 0);
                result = 31 * result + (this.polardbPerfTtl != null ? this.polardbPerfTtl.hashCode() : 0);
                result = 31 * result + (this.polardbSlowCollectionPolicy != null ? this.polardbSlowCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.polardbSlowEnabled != null ? this.polardbSlowEnabled.hashCode() : 0);
                result = 31 * result + (this.polardbSlowPolicySetting != null ? this.polardbSlowPolicySetting.hashCode() : 0);
                result = 31 * result + (this.polardbSlowTiEnabled != null ? this.polardbSlowTiEnabled.hashCode() : 0);
                result = 31 * result + (this.polardbSlowTtl != null ? this.polardbSlowTtl.hashCode() : 0);
                result = 31 * result + (this.polardbTiEnabled != null ? this.polardbTiEnabled.hashCode() : 0);
                result = 31 * result + (this.polardbTtl != null ? this.polardbTtl.hashCode() : 0);
                result = 31 * result + (this.rdsAuditCollectionPolicy != null ? this.rdsAuditCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.rdsAuditPolicySetting != null ? this.rdsAuditPolicySetting.hashCode() : 0);
                result = 31 * result + (this.rdsEnabled != null ? this.rdsEnabled.hashCode() : 0);
                result = 31 * result + (this.rdsPerfCollectionPolicy != null ? this.rdsPerfCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.rdsPerfEnabled != null ? this.rdsPerfEnabled.hashCode() : 0);
                result = 31 * result + (this.rdsPerfPolicySetting != null ? this.rdsPerfPolicySetting.hashCode() : 0);
                result = 31 * result + (this.rdsPerfTiEnabled != null ? this.rdsPerfTiEnabled.hashCode() : 0);
                result = 31 * result + (this.rdsPerfTtl != null ? this.rdsPerfTtl.hashCode() : 0);
                result = 31 * result + (this.rdsSlowCollectionPolicy != null ? this.rdsSlowCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.rdsSlowEnabled != null ? this.rdsSlowEnabled.hashCode() : 0);
                result = 31 * result + (this.rdsSlowPolicySetting != null ? this.rdsSlowPolicySetting.hashCode() : 0);
                result = 31 * result + (this.rdsSlowTiEnabled != null ? this.rdsSlowTiEnabled.hashCode() : 0);
                result = 31 * result + (this.rdsSlowTtl != null ? this.rdsSlowTtl.hashCode() : 0);
                result = 31 * result + (this.rdsTiEnabled != null ? this.rdsTiEnabled.hashCode() : 0);
                result = 31 * result + (this.rdsTtl != null ? this.rdsTtl.hashCode() : 0);
                result = 31 * result + (this.redisAuditCollectionPolicy != null ? this.redisAuditCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.redisAuditEnabled != null ? this.redisAuditEnabled.hashCode() : 0);
                result = 31 * result + (this.redisAuditPolicySetting != null ? this.redisAuditPolicySetting.hashCode() : 0);
                result = 31 * result + (this.redisAuditTiEnabled != null ? this.redisAuditTiEnabled.hashCode() : 0);
                result = 31 * result + (this.redisAuditTtl != null ? this.redisAuditTtl.hashCode() : 0);
                result = 31 * result + (this.redisSyncEnabled != null ? this.redisSyncEnabled.hashCode() : 0);
                result = 31 * result + (this.redisSyncTtl != null ? this.redisSyncTtl.hashCode() : 0);
                result = 31 * result + (this.sasCrackEnabled != null ? this.sasCrackEnabled.hashCode() : 0);
                result = 31 * result + (this.sasDnsEnabled != null ? this.sasDnsEnabled.hashCode() : 0);
                result = 31 * result + (this.sasHttpEnabled != null ? this.sasHttpEnabled.hashCode() : 0);
                result = 31 * result + (this.sasLocalDnsEnabled != null ? this.sasLocalDnsEnabled.hashCode() : 0);
                result = 31 * result + (this.sasLoginEnabled != null ? this.sasLoginEnabled.hashCode() : 0);
                result = 31 * result + (this.sasNetworkEnabled != null ? this.sasNetworkEnabled.hashCode() : 0);
                result = 31 * result + (this.sasProcessEnabled != null ? this.sasProcessEnabled.hashCode() : 0);
                result = 31 * result + (this.sasSecurityAlertEnabled != null ? this.sasSecurityAlertEnabled.hashCode() : 0);
                result = 31 * result + (this.sasSecurityHcEnabled != null ? this.sasSecurityHcEnabled.hashCode() : 0);
                result = 31 * result + (this.sasSecurityVulEnabled != null ? this.sasSecurityVulEnabled.hashCode() : 0);
                result = 31 * result + (this.sasSessionEnabled != null ? this.sasSessionEnabled.hashCode() : 0);
                result = 31 * result + (this.sasSnapshotAccountEnabled != null ? this.sasSnapshotAccountEnabled.hashCode() : 0);
                result = 31 * result + (this.sasSnapshotPortEnabled != null ? this.sasSnapshotPortEnabled.hashCode() : 0);
                result = 31 * result + (this.sasSnapshotProcessEnabled != null ? this.sasSnapshotProcessEnabled.hashCode() : 0);
                result = 31 * result + (this.sasTiEnabled != null ? this.sasTiEnabled.hashCode() : 0);
                result = 31 * result + (this.sasTtl != null ? this.sasTtl.hashCode() : 0);
                result = 31 * result + (this.slbAccessCollectionPolicy != null ? this.slbAccessCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.slbAccessEnabled != null ? this.slbAccessEnabled.hashCode() : 0);
                result = 31 * result + (this.slbAccessPolicySetting != null ? this.slbAccessPolicySetting.hashCode() : 0);
                result = 31 * result + (this.slbAccessTiEnabled != null ? this.slbAccessTiEnabled.hashCode() : 0);
                result = 31 * result + (this.slbAccessTtl != null ? this.slbAccessTtl.hashCode() : 0);
                result = 31 * result + (this.slbSyncEnabled != null ? this.slbSyncEnabled.hashCode() : 0);
                result = 31 * result + (this.slbSyncTtl != null ? this.slbSyncTtl.hashCode() : 0);
                result = 31 * result + (this.wafAccessCollectionPolicy != null ? this.wafAccessCollectionPolicy.hashCode() : 0);
                result = 31 * result + (this.wafAccessPolicySetting != null ? this.wafAccessPolicySetting.hashCode() : 0);
                result = 31 * result + (this.wafEnabled != null ? this.wafEnabled.hashCode() : 0);
                result = 31 * result + (this.wafTiEnabled != null ? this.wafTiEnabled.hashCode() : 0);
                result = 31 * result + (this.wafTtl != null ? this.wafTtl.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosAudit}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosAudit> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sls.RosAuditProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosAuditProps.Builder();
        }

        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * @return {@code this}
         * @param variableMap This parameter is required.
         */
        public Builder variableMap(final com.aliyun.ros.cdk.core.IResolvable variableMap) {
            this.props.variableMap(variableMap);
            return this;
        }
        /**
         * @return {@code this}
         * @param variableMap This parameter is required.
         */
        public Builder variableMap(final com.aliyun.ros.cdk.sls.RosAudit.VariableMapProperty variableMap) {
            this.props.variableMap(variableMap);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiAccount This parameter is required.
         */
        public Builder multiAccount(final com.aliyun.ros.cdk.core.IResolvable multiAccount) {
            this.props.multiAccount(multiAccount);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiAccount This parameter is required.
         */
        public Builder multiAccount(final java.util.List<? extends java.lang.Object> multiAccount) {
            this.props.multiAccount(multiAccount);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.RosAudit}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosAudit build() {
            return new com.aliyun.ros.cdk.sls.RosAudit(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
