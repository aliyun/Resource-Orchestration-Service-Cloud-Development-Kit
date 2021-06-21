package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Audit`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.134Z")
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getActiontrailTtl() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getApigatewayTtl() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getBastionTtl() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpsEnabled() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasEnabled() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessEnabled() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssMeteringEnabled() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsEnabled() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getSasTtl() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getWafEnabled() {
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
            private java.lang.Object actiontrailEnabled;
            private java.lang.Object actiontrailTtl;
            private java.lang.Object apigatewayEnabled;
            private java.lang.Object apigatewayTtl;
            private java.lang.Object bastionEnabled;
            private java.lang.Object bastionTtl;
            private java.lang.Object cloudfirewallTtl;
            private java.lang.Object cpsEnabled;
            private java.lang.Object cpsTtl;
            private java.lang.Object nasEnabled;
            private java.lang.Object nasTtl;
            private java.lang.Object ossAccessEnabled;
            private java.lang.Object ossAccessTtl;
            private java.lang.Object ossMeteringEnabled;
            private java.lang.Object ossMeteringTtl;
            private java.lang.Object ossSyncEnabled;
            private java.lang.Object ossSyncTtl;
            private java.lang.Object rdsEnabled;
            private java.lang.Object rdsTtl;
            private java.lang.Object sasCrackEnabled;
            private java.lang.Object sasDnsEnabled;
            private java.lang.Object sasHttpEnabled;
            private java.lang.Object sasLocalDnsEnabled;
            private java.lang.Object sasLoginEnabled;
            private java.lang.Object sasNetworkEnabled;
            private java.lang.Object sasProcessEnabled;
            private java.lang.Object sasSecurityAlertEnabled;
            private java.lang.Object sasSecurityHcEnabled;
            private java.lang.Object sasSecurityVulEnabled;
            private java.lang.Object sasSessionEnabled;
            private java.lang.Object sasSnapshotAccountEnabled;
            private java.lang.Object sasSnapshotPortEnabled;
            private java.lang.Object sasSnapshotProcessEnabled;
            private java.lang.Object sasTtl;
            private java.lang.Object slbAccessEnabled;
            private java.lang.Object slbAccessTtl;
            private java.lang.Object slbSyncEnabled;
            private java.lang.Object slbSyncTtl;
            private java.lang.Object wafEnabled;
            private java.lang.Object wafTtl;

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
                return new Jsii$Proxy(actiontrailEnabled, actiontrailTtl, apigatewayEnabled, apigatewayTtl, bastionEnabled, bastionTtl, cloudfirewallTtl, cpsEnabled, cpsTtl, nasEnabled, nasTtl, ossAccessEnabled, ossAccessTtl, ossMeteringEnabled, ossMeteringTtl, ossSyncEnabled, ossSyncTtl, rdsEnabled, rdsTtl, sasCrackEnabled, sasDnsEnabled, sasHttpEnabled, sasLocalDnsEnabled, sasLoginEnabled, sasNetworkEnabled, sasProcessEnabled, sasSecurityAlertEnabled, sasSecurityHcEnabled, sasSecurityVulEnabled, sasSessionEnabled, sasSnapshotAccountEnabled, sasSnapshotPortEnabled, sasSnapshotProcessEnabled, sasTtl, slbAccessEnabled, slbAccessTtl, slbSyncEnabled, slbSyncTtl, wafEnabled, wafTtl);
            }
        }

        /**
         * An implementation for {@link VariableMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VariableMapProperty {
            private final java.lang.Object actiontrailEnabled;
            private final java.lang.Object actiontrailTtl;
            private final java.lang.Object apigatewayEnabled;
            private final java.lang.Object apigatewayTtl;
            private final java.lang.Object bastionEnabled;
            private final java.lang.Object bastionTtl;
            private final java.lang.Object cloudfirewallTtl;
            private final java.lang.Object cpsEnabled;
            private final java.lang.Object cpsTtl;
            private final java.lang.Object nasEnabled;
            private final java.lang.Object nasTtl;
            private final java.lang.Object ossAccessEnabled;
            private final java.lang.Object ossAccessTtl;
            private final java.lang.Object ossMeteringEnabled;
            private final java.lang.Object ossMeteringTtl;
            private final java.lang.Object ossSyncEnabled;
            private final java.lang.Object ossSyncTtl;
            private final java.lang.Object rdsEnabled;
            private final java.lang.Object rdsTtl;
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
            private final java.lang.Object sasTtl;
            private final java.lang.Object slbAccessEnabled;
            private final java.lang.Object slbAccessTtl;
            private final java.lang.Object slbSyncEnabled;
            private final java.lang.Object slbSyncTtl;
            private final java.lang.Object wafEnabled;
            private final java.lang.Object wafTtl;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.actiontrailEnabled = software.amazon.jsii.Kernel.get(this, "actiontrailEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.actiontrailTtl = software.amazon.jsii.Kernel.get(this, "actiontrailTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apigatewayEnabled = software.amazon.jsii.Kernel.get(this, "apigatewayEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apigatewayTtl = software.amazon.jsii.Kernel.get(this, "apigatewayTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bastionEnabled = software.amazon.jsii.Kernel.get(this, "bastionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bastionTtl = software.amazon.jsii.Kernel.get(this, "bastionTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cloudfirewallTtl = software.amazon.jsii.Kernel.get(this, "cloudfirewallTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpsEnabled = software.amazon.jsii.Kernel.get(this, "cpsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpsTtl = software.amazon.jsii.Kernel.get(this, "cpsTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasEnabled = software.amazon.jsii.Kernel.get(this, "nasEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasTtl = software.amazon.jsii.Kernel.get(this, "nasTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossAccessEnabled = software.amazon.jsii.Kernel.get(this, "ossAccessEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossAccessTtl = software.amazon.jsii.Kernel.get(this, "ossAccessTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossMeteringEnabled = software.amazon.jsii.Kernel.get(this, "ossMeteringEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossMeteringTtl = software.amazon.jsii.Kernel.get(this, "ossMeteringTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossSyncEnabled = software.amazon.jsii.Kernel.get(this, "ossSyncEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossSyncTtl = software.amazon.jsii.Kernel.get(this, "ossSyncTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsEnabled = software.amazon.jsii.Kernel.get(this, "rdsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsTtl = software.amazon.jsii.Kernel.get(this, "rdsTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
                this.sasTtl = software.amazon.jsii.Kernel.get(this, "sasTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbAccessEnabled = software.amazon.jsii.Kernel.get(this, "slbAccessEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbAccessTtl = software.amazon.jsii.Kernel.get(this, "slbAccessTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbSyncEnabled = software.amazon.jsii.Kernel.get(this, "slbSyncEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbSyncTtl = software.amazon.jsii.Kernel.get(this, "slbSyncTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wafEnabled = software.amazon.jsii.Kernel.get(this, "wafEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wafTtl = software.amazon.jsii.Kernel.get(this, "wafTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object actiontrailEnabled, final java.lang.Object actiontrailTtl, final java.lang.Object apigatewayEnabled, final java.lang.Object apigatewayTtl, final java.lang.Object bastionEnabled, final java.lang.Object bastionTtl, final java.lang.Object cloudfirewallTtl, final java.lang.Object cpsEnabled, final java.lang.Object cpsTtl, final java.lang.Object nasEnabled, final java.lang.Object nasTtl, final java.lang.Object ossAccessEnabled, final java.lang.Object ossAccessTtl, final java.lang.Object ossMeteringEnabled, final java.lang.Object ossMeteringTtl, final java.lang.Object ossSyncEnabled, final java.lang.Object ossSyncTtl, final java.lang.Object rdsEnabled, final java.lang.Object rdsTtl, final java.lang.Object sasCrackEnabled, final java.lang.Object sasDnsEnabled, final java.lang.Object sasHttpEnabled, final java.lang.Object sasLocalDnsEnabled, final java.lang.Object sasLoginEnabled, final java.lang.Object sasNetworkEnabled, final java.lang.Object sasProcessEnabled, final java.lang.Object sasSecurityAlertEnabled, final java.lang.Object sasSecurityHcEnabled, final java.lang.Object sasSecurityVulEnabled, final java.lang.Object sasSessionEnabled, final java.lang.Object sasSnapshotAccountEnabled, final java.lang.Object sasSnapshotPortEnabled, final java.lang.Object sasSnapshotProcessEnabled, final java.lang.Object sasTtl, final java.lang.Object slbAccessEnabled, final java.lang.Object slbAccessTtl, final java.lang.Object slbSyncEnabled, final java.lang.Object slbSyncTtl, final java.lang.Object wafEnabled, final java.lang.Object wafTtl) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.actiontrailEnabled = actiontrailEnabled;
                this.actiontrailTtl = actiontrailTtl;
                this.apigatewayEnabled = apigatewayEnabled;
                this.apigatewayTtl = apigatewayTtl;
                this.bastionEnabled = bastionEnabled;
                this.bastionTtl = bastionTtl;
                this.cloudfirewallTtl = cloudfirewallTtl;
                this.cpsEnabled = cpsEnabled;
                this.cpsTtl = cpsTtl;
                this.nasEnabled = nasEnabled;
                this.nasTtl = nasTtl;
                this.ossAccessEnabled = ossAccessEnabled;
                this.ossAccessTtl = ossAccessTtl;
                this.ossMeteringEnabled = ossMeteringEnabled;
                this.ossMeteringTtl = ossMeteringTtl;
                this.ossSyncEnabled = ossSyncEnabled;
                this.ossSyncTtl = ossSyncTtl;
                this.rdsEnabled = rdsEnabled;
                this.rdsTtl = rdsTtl;
                this.sasCrackEnabled = sasCrackEnabled;
                this.sasDnsEnabled = sasDnsEnabled;
                this.sasHttpEnabled = sasHttpEnabled;
                this.sasLocalDnsEnabled = sasLocalDnsEnabled;
                this.sasLoginEnabled = sasLoginEnabled;
                this.sasNetworkEnabled = sasNetworkEnabled;
                this.sasProcessEnabled = sasProcessEnabled;
                this.sasSecurityAlertEnabled = sasSecurityAlertEnabled;
                this.sasSecurityHcEnabled = sasSecurityHcEnabled;
                this.sasSecurityVulEnabled = sasSecurityVulEnabled;
                this.sasSessionEnabled = sasSessionEnabled;
                this.sasSnapshotAccountEnabled = sasSnapshotAccountEnabled;
                this.sasSnapshotPortEnabled = sasSnapshotPortEnabled;
                this.sasSnapshotProcessEnabled = sasSnapshotProcessEnabled;
                this.sasTtl = sasTtl;
                this.slbAccessEnabled = slbAccessEnabled;
                this.slbAccessTtl = slbAccessTtl;
                this.slbSyncEnabled = slbSyncEnabled;
                this.slbSyncTtl = slbSyncTtl;
                this.wafEnabled = wafEnabled;
                this.wafTtl = wafTtl;
            }

            @Override
            public final java.lang.Object getActiontrailEnabled() {
                return this.actiontrailEnabled;
            }

            @Override
            public final java.lang.Object getActiontrailTtl() {
                return this.actiontrailTtl;
            }

            @Override
            public final java.lang.Object getApigatewayEnabled() {
                return this.apigatewayEnabled;
            }

            @Override
            public final java.lang.Object getApigatewayTtl() {
                return this.apigatewayTtl;
            }

            @Override
            public final java.lang.Object getBastionEnabled() {
                return this.bastionEnabled;
            }

            @Override
            public final java.lang.Object getBastionTtl() {
                return this.bastionTtl;
            }

            @Override
            public final java.lang.Object getCloudfirewallTtl() {
                return this.cloudfirewallTtl;
            }

            @Override
            public final java.lang.Object getCpsEnabled() {
                return this.cpsEnabled;
            }

            @Override
            public final java.lang.Object getCpsTtl() {
                return this.cpsTtl;
            }

            @Override
            public final java.lang.Object getNasEnabled() {
                return this.nasEnabled;
            }

            @Override
            public final java.lang.Object getNasTtl() {
                return this.nasTtl;
            }

            @Override
            public final java.lang.Object getOssAccessEnabled() {
                return this.ossAccessEnabled;
            }

            @Override
            public final java.lang.Object getOssAccessTtl() {
                return this.ossAccessTtl;
            }

            @Override
            public final java.lang.Object getOssMeteringEnabled() {
                return this.ossMeteringEnabled;
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
            public final java.lang.Object getRdsEnabled() {
                return this.rdsEnabled;
            }

            @Override
            public final java.lang.Object getRdsTtl() {
                return this.rdsTtl;
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
            public final java.lang.Object getSasTtl() {
                return this.sasTtl;
            }

            @Override
            public final java.lang.Object getSlbAccessEnabled() {
                return this.slbAccessEnabled;
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
            public final java.lang.Object getWafEnabled() {
                return this.wafEnabled;
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
                if (this.getActiontrailTtl() != null) {
                    data.set("actiontrailTtl", om.valueToTree(this.getActiontrailTtl()));
                }
                if (this.getApigatewayEnabled() != null) {
                    data.set("apigatewayEnabled", om.valueToTree(this.getApigatewayEnabled()));
                }
                if (this.getApigatewayTtl() != null) {
                    data.set("apigatewayTtl", om.valueToTree(this.getApigatewayTtl()));
                }
                if (this.getBastionEnabled() != null) {
                    data.set("bastionEnabled", om.valueToTree(this.getBastionEnabled()));
                }
                if (this.getBastionTtl() != null) {
                    data.set("bastionTtl", om.valueToTree(this.getBastionTtl()));
                }
                if (this.getCloudfirewallTtl() != null) {
                    data.set("cloudfirewallTtl", om.valueToTree(this.getCloudfirewallTtl()));
                }
                if (this.getCpsEnabled() != null) {
                    data.set("cpsEnabled", om.valueToTree(this.getCpsEnabled()));
                }
                if (this.getCpsTtl() != null) {
                    data.set("cpsTtl", om.valueToTree(this.getCpsTtl()));
                }
                if (this.getNasEnabled() != null) {
                    data.set("nasEnabled", om.valueToTree(this.getNasEnabled()));
                }
                if (this.getNasTtl() != null) {
                    data.set("nasTtl", om.valueToTree(this.getNasTtl()));
                }
                if (this.getOssAccessEnabled() != null) {
                    data.set("ossAccessEnabled", om.valueToTree(this.getOssAccessEnabled()));
                }
                if (this.getOssAccessTtl() != null) {
                    data.set("ossAccessTtl", om.valueToTree(this.getOssAccessTtl()));
                }
                if (this.getOssMeteringEnabled() != null) {
                    data.set("ossMeteringEnabled", om.valueToTree(this.getOssMeteringEnabled()));
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
                if (this.getRdsEnabled() != null) {
                    data.set("rdsEnabled", om.valueToTree(this.getRdsEnabled()));
                }
                if (this.getRdsTtl() != null) {
                    data.set("rdsTtl", om.valueToTree(this.getRdsTtl()));
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
                if (this.getSasTtl() != null) {
                    data.set("sasTtl", om.valueToTree(this.getSasTtl()));
                }
                if (this.getSlbAccessEnabled() != null) {
                    data.set("slbAccessEnabled", om.valueToTree(this.getSlbAccessEnabled()));
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
                if (this.getWafEnabled() != null) {
                    data.set("wafEnabled", om.valueToTree(this.getWafEnabled()));
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
                if (this.actiontrailTtl != null ? !this.actiontrailTtl.equals(that.actiontrailTtl) : that.actiontrailTtl != null) return false;
                if (this.apigatewayEnabled != null ? !this.apigatewayEnabled.equals(that.apigatewayEnabled) : that.apigatewayEnabled != null) return false;
                if (this.apigatewayTtl != null ? !this.apigatewayTtl.equals(that.apigatewayTtl) : that.apigatewayTtl != null) return false;
                if (this.bastionEnabled != null ? !this.bastionEnabled.equals(that.bastionEnabled) : that.bastionEnabled != null) return false;
                if (this.bastionTtl != null ? !this.bastionTtl.equals(that.bastionTtl) : that.bastionTtl != null) return false;
                if (this.cloudfirewallTtl != null ? !this.cloudfirewallTtl.equals(that.cloudfirewallTtl) : that.cloudfirewallTtl != null) return false;
                if (this.cpsEnabled != null ? !this.cpsEnabled.equals(that.cpsEnabled) : that.cpsEnabled != null) return false;
                if (this.cpsTtl != null ? !this.cpsTtl.equals(that.cpsTtl) : that.cpsTtl != null) return false;
                if (this.nasEnabled != null ? !this.nasEnabled.equals(that.nasEnabled) : that.nasEnabled != null) return false;
                if (this.nasTtl != null ? !this.nasTtl.equals(that.nasTtl) : that.nasTtl != null) return false;
                if (this.ossAccessEnabled != null ? !this.ossAccessEnabled.equals(that.ossAccessEnabled) : that.ossAccessEnabled != null) return false;
                if (this.ossAccessTtl != null ? !this.ossAccessTtl.equals(that.ossAccessTtl) : that.ossAccessTtl != null) return false;
                if (this.ossMeteringEnabled != null ? !this.ossMeteringEnabled.equals(that.ossMeteringEnabled) : that.ossMeteringEnabled != null) return false;
                if (this.ossMeteringTtl != null ? !this.ossMeteringTtl.equals(that.ossMeteringTtl) : that.ossMeteringTtl != null) return false;
                if (this.ossSyncEnabled != null ? !this.ossSyncEnabled.equals(that.ossSyncEnabled) : that.ossSyncEnabled != null) return false;
                if (this.ossSyncTtl != null ? !this.ossSyncTtl.equals(that.ossSyncTtl) : that.ossSyncTtl != null) return false;
                if (this.rdsEnabled != null ? !this.rdsEnabled.equals(that.rdsEnabled) : that.rdsEnabled != null) return false;
                if (this.rdsTtl != null ? !this.rdsTtl.equals(that.rdsTtl) : that.rdsTtl != null) return false;
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
                if (this.sasTtl != null ? !this.sasTtl.equals(that.sasTtl) : that.sasTtl != null) return false;
                if (this.slbAccessEnabled != null ? !this.slbAccessEnabled.equals(that.slbAccessEnabled) : that.slbAccessEnabled != null) return false;
                if (this.slbAccessTtl != null ? !this.slbAccessTtl.equals(that.slbAccessTtl) : that.slbAccessTtl != null) return false;
                if (this.slbSyncEnabled != null ? !this.slbSyncEnabled.equals(that.slbSyncEnabled) : that.slbSyncEnabled != null) return false;
                if (this.slbSyncTtl != null ? !this.slbSyncTtl.equals(that.slbSyncTtl) : that.slbSyncTtl != null) return false;
                if (this.wafEnabled != null ? !this.wafEnabled.equals(that.wafEnabled) : that.wafEnabled != null) return false;
                return this.wafTtl != null ? this.wafTtl.equals(that.wafTtl) : that.wafTtl == null;
            }

            @Override
            public final int hashCode() {
                int result = this.actiontrailEnabled != null ? this.actiontrailEnabled.hashCode() : 0;
                result = 31 * result + (this.actiontrailTtl != null ? this.actiontrailTtl.hashCode() : 0);
                result = 31 * result + (this.apigatewayEnabled != null ? this.apigatewayEnabled.hashCode() : 0);
                result = 31 * result + (this.apigatewayTtl != null ? this.apigatewayTtl.hashCode() : 0);
                result = 31 * result + (this.bastionEnabled != null ? this.bastionEnabled.hashCode() : 0);
                result = 31 * result + (this.bastionTtl != null ? this.bastionTtl.hashCode() : 0);
                result = 31 * result + (this.cloudfirewallTtl != null ? this.cloudfirewallTtl.hashCode() : 0);
                result = 31 * result + (this.cpsEnabled != null ? this.cpsEnabled.hashCode() : 0);
                result = 31 * result + (this.cpsTtl != null ? this.cpsTtl.hashCode() : 0);
                result = 31 * result + (this.nasEnabled != null ? this.nasEnabled.hashCode() : 0);
                result = 31 * result + (this.nasTtl != null ? this.nasTtl.hashCode() : 0);
                result = 31 * result + (this.ossAccessEnabled != null ? this.ossAccessEnabled.hashCode() : 0);
                result = 31 * result + (this.ossAccessTtl != null ? this.ossAccessTtl.hashCode() : 0);
                result = 31 * result + (this.ossMeteringEnabled != null ? this.ossMeteringEnabled.hashCode() : 0);
                result = 31 * result + (this.ossMeteringTtl != null ? this.ossMeteringTtl.hashCode() : 0);
                result = 31 * result + (this.ossSyncEnabled != null ? this.ossSyncEnabled.hashCode() : 0);
                result = 31 * result + (this.ossSyncTtl != null ? this.ossSyncTtl.hashCode() : 0);
                result = 31 * result + (this.rdsEnabled != null ? this.rdsEnabled.hashCode() : 0);
                result = 31 * result + (this.rdsTtl != null ? this.rdsTtl.hashCode() : 0);
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
                result = 31 * result + (this.sasTtl != null ? this.sasTtl.hashCode() : 0);
                result = 31 * result + (this.slbAccessEnabled != null ? this.slbAccessEnabled.hashCode() : 0);
                result = 31 * result + (this.slbAccessTtl != null ? this.slbAccessTtl.hashCode() : 0);
                result = 31 * result + (this.slbSyncEnabled != null ? this.slbSyncEnabled.hashCode() : 0);
                result = 31 * result + (this.slbSyncTtl != null ? this.slbSyncTtl.hashCode() : 0);
                result = 31 * result + (this.wafEnabled != null ? this.wafEnabled.hashCode() : 0);
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
