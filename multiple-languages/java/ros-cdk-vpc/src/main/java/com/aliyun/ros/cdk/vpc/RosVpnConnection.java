package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  `ALIYUN::VPC::VpnConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:03.646Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection")
public class RosVpnConnection extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpnConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpnConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosVpnConnection.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::VPC::VpnConnection`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpnConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosVpnConnectionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerVpnConnectionConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerVpnConnectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnConnectionId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnConnectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getCustomerGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "customerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setCustomerGatewayId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "customerGatewayId", java.util.Objects.requireNonNull(value, "customerGatewayId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getLocalSubnet() {
        return software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLocalSubnet(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localSubnet", java.util.Objects.requireNonNull(value, "localSubnet is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getRemoteSubnet() {
        return software.amazon.jsii.Kernel.get(this, "remoteSubnet", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRemoteSubnet(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remoteSubnet", java.util.Objects.requireNonNull(value, "remoteSubnet is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVpnGatewayId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayId", java.util.Objects.requireNonNull(value, "vpnGatewayId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEffectImmediately() {
        return software.amazon.jsii.Kernel.get(this, "effectImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEffectImmediately(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "effectImmediately", value);
    }

    /**
     */
    public void setEffectImmediately(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "effectImmediately", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", value);
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosVpnConnection.HealthCheckConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIkeConfig() {
        return software.amazon.jsii.Kernel.get(this, "ikeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIkeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ikeConfig", value);
    }

    /**
     */
    public void setIkeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosVpnConnection.IkeConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ikeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpsecConfig() {
        return software.amazon.jsii.Kernel.get(this, "ipsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpsecConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipsecConfig", value);
    }

    /**
     */
    public void setIpsecConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosVpnConnection.IpsecConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ipsecConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HealthCheckConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HealthCheckConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDip() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getRetry() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getSip() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HealthCheckConfigProperty> {
            private java.lang.Object dip;
            private java.lang.Object enable;
            private java.lang.Number interval;
            private java.lang.Number retry;
            private java.lang.String sip;

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getDip}
             * @param dip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dip(java.lang.Boolean dip) {
                this.dip = dip;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getDip}
             * @param dip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dip(com.aliyun.ros.cdk.core.IResolvable dip) {
                this.dip = dip;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(java.lang.Number interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getRetry}
             * @param retry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retry(java.lang.Number retry) {
                this.retry = retry;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getSip}
             * @param sip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sip(java.lang.String sip) {
                this.sip = sip;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HealthCheckConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HealthCheckConfigProperty build() {
                return new Jsii$Proxy(dip, enable, interval, retry, sip);
            }
        }

        /**
         * An implementation for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HealthCheckConfigProperty {
            private final java.lang.Object dip;
            private final java.lang.Object enable;
            private final java.lang.Number interval;
            private final java.lang.Number retry;
            private final java.lang.String sip;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dip = software.amazon.jsii.Kernel.get(this, "dip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.retry = software.amazon.jsii.Kernel.get(this, "retry", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.sip = software.amazon.jsii.Kernel.get(this, "sip", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object dip, final java.lang.Object enable, final java.lang.Number interval, final java.lang.Number retry, final java.lang.String sip) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dip = dip;
                this.enable = enable;
                this.interval = interval;
                this.retry = retry;
                this.sip = sip;
            }

            @Override
            public final java.lang.Object getDip() {
                return this.dip;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Number getInterval() {
                return this.interval;
            }

            @Override
            public final java.lang.Number getRetry() {
                return this.retry;
            }

            @Override
            public final java.lang.String getSip() {
                return this.sip;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDip() != null) {
                    data.set("dip", om.valueToTree(this.getDip()));
                }
                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getInterval() != null) {
                    data.set("interval", om.valueToTree(this.getInterval()));
                }
                if (this.getRetry() != null) {
                    data.set("retry", om.valueToTree(this.getRetry()));
                }
                if (this.getSip() != null) {
                    data.set("sip", om.valueToTree(this.getSip()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HealthCheckConfigProperty.Jsii$Proxy that = (HealthCheckConfigProperty.Jsii$Proxy) o;

                if (this.dip != null ? !this.dip.equals(that.dip) : that.dip != null) return false;
                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
                if (this.retry != null ? !this.retry.equals(that.retry) : that.retry != null) return false;
                return this.sip != null ? this.sip.equals(that.sip) : that.sip == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dip != null ? this.dip.hashCode() : 0;
                result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
                result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
                result = 31 * result + (this.retry != null ? this.retry.hashCode() : 0);
                result = 31 * result + (this.sip != null ? this.sip.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(IkeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IkeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIkeAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIkeEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getIkeLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIkeMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIkePfs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIkeVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getLocalIdIPsec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPsk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getRemoteId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IkeConfigProperty> {
            private java.lang.String ikeAuthAlg;
            private java.lang.String ikeEncAlg;
            private java.lang.Number ikeLifetime;
            private java.lang.String ikeMode;
            private java.lang.String ikePfs;
            private java.lang.String ikeVersion;
            private java.lang.String localIdIPsec;
            private java.lang.String psk;
            private java.lang.String remoteId;

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeAuthAlg}
             * @param ikeAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeAuthAlg(java.lang.String ikeAuthAlg) {
                this.ikeAuthAlg = ikeAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeEncAlg}
             * @param ikeEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeEncAlg(java.lang.String ikeEncAlg) {
                this.ikeEncAlg = ikeEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeLifetime}
             * @param ikeLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeLifetime(java.lang.Number ikeLifetime) {
                this.ikeLifetime = ikeLifetime;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeMode}
             * @param ikeMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeMode(java.lang.String ikeMode) {
                this.ikeMode = ikeMode;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkePfs}
             * @param ikePfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikePfs(java.lang.String ikePfs) {
                this.ikePfs = ikePfs;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeVersion}
             * @param ikeVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeVersion(java.lang.String ikeVersion) {
                this.ikeVersion = ikeVersion;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getLocalIdIPsec}
             * @param localIdIPsec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localIdIPsec(java.lang.String localIdIPsec) {
                this.localIdIPsec = localIdIPsec;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getPsk}
             * @param psk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder psk(java.lang.String psk) {
                this.psk = psk;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getRemoteId}
             * @param remoteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteId(java.lang.String remoteId) {
                this.remoteId = remoteId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IkeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IkeConfigProperty build() {
                return new Jsii$Proxy(ikeAuthAlg, ikeEncAlg, ikeLifetime, ikeMode, ikePfs, ikeVersion, localIdIPsec, psk, remoteId);
            }
        }

        /**
         * An implementation for {@link IkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IkeConfigProperty {
            private final java.lang.String ikeAuthAlg;
            private final java.lang.String ikeEncAlg;
            private final java.lang.Number ikeLifetime;
            private final java.lang.String ikeMode;
            private final java.lang.String ikePfs;
            private final java.lang.String ikeVersion;
            private final java.lang.String localIdIPsec;
            private final java.lang.String psk;
            private final java.lang.String remoteId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ikeAuthAlg = software.amazon.jsii.Kernel.get(this, "ikeAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ikeEncAlg = software.amazon.jsii.Kernel.get(this, "ikeEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ikeLifetime = software.amazon.jsii.Kernel.get(this, "ikeLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.ikeMode = software.amazon.jsii.Kernel.get(this, "ikeMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ikePfs = software.amazon.jsii.Kernel.get(this, "ikePfs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ikeVersion = software.amazon.jsii.Kernel.get(this, "ikeVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.localIdIPsec = software.amazon.jsii.Kernel.get(this, "localIdIPsec", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.psk = software.amazon.jsii.Kernel.get(this, "psk", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.remoteId = software.amazon.jsii.Kernel.get(this, "remoteId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String ikeAuthAlg, final java.lang.String ikeEncAlg, final java.lang.Number ikeLifetime, final java.lang.String ikeMode, final java.lang.String ikePfs, final java.lang.String ikeVersion, final java.lang.String localIdIPsec, final java.lang.String psk, final java.lang.String remoteId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ikeAuthAlg = ikeAuthAlg;
                this.ikeEncAlg = ikeEncAlg;
                this.ikeLifetime = ikeLifetime;
                this.ikeMode = ikeMode;
                this.ikePfs = ikePfs;
                this.ikeVersion = ikeVersion;
                this.localIdIPsec = localIdIPsec;
                this.psk = psk;
                this.remoteId = remoteId;
            }

            @Override
            public final java.lang.String getIkeAuthAlg() {
                return this.ikeAuthAlg;
            }

            @Override
            public final java.lang.String getIkeEncAlg() {
                return this.ikeEncAlg;
            }

            @Override
            public final java.lang.Number getIkeLifetime() {
                return this.ikeLifetime;
            }

            @Override
            public final java.lang.String getIkeMode() {
                return this.ikeMode;
            }

            @Override
            public final java.lang.String getIkePfs() {
                return this.ikePfs;
            }

            @Override
            public final java.lang.String getIkeVersion() {
                return this.ikeVersion;
            }

            @Override
            public final java.lang.String getLocalIdIPsec() {
                return this.localIdIPsec;
            }

            @Override
            public final java.lang.String getPsk() {
                return this.psk;
            }

            @Override
            public final java.lang.String getRemoteId() {
                return this.remoteId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIkeAuthAlg() != null) {
                    data.set("ikeAuthAlg", om.valueToTree(this.getIkeAuthAlg()));
                }
                if (this.getIkeEncAlg() != null) {
                    data.set("ikeEncAlg", om.valueToTree(this.getIkeEncAlg()));
                }
                if (this.getIkeLifetime() != null) {
                    data.set("ikeLifetime", om.valueToTree(this.getIkeLifetime()));
                }
                if (this.getIkeMode() != null) {
                    data.set("ikeMode", om.valueToTree(this.getIkeMode()));
                }
                if (this.getIkePfs() != null) {
                    data.set("ikePfs", om.valueToTree(this.getIkePfs()));
                }
                if (this.getIkeVersion() != null) {
                    data.set("ikeVersion", om.valueToTree(this.getIkeVersion()));
                }
                if (this.getLocalIdIPsec() != null) {
                    data.set("localIdIPsec", om.valueToTree(this.getLocalIdIPsec()));
                }
                if (this.getPsk() != null) {
                    data.set("psk", om.valueToTree(this.getPsk()));
                }
                if (this.getRemoteId() != null) {
                    data.set("remoteId", om.valueToTree(this.getRemoteId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IkeConfigProperty.Jsii$Proxy that = (IkeConfigProperty.Jsii$Proxy) o;

                if (this.ikeAuthAlg != null ? !this.ikeAuthAlg.equals(that.ikeAuthAlg) : that.ikeAuthAlg != null) return false;
                if (this.ikeEncAlg != null ? !this.ikeEncAlg.equals(that.ikeEncAlg) : that.ikeEncAlg != null) return false;
                if (this.ikeLifetime != null ? !this.ikeLifetime.equals(that.ikeLifetime) : that.ikeLifetime != null) return false;
                if (this.ikeMode != null ? !this.ikeMode.equals(that.ikeMode) : that.ikeMode != null) return false;
                if (this.ikePfs != null ? !this.ikePfs.equals(that.ikePfs) : that.ikePfs != null) return false;
                if (this.ikeVersion != null ? !this.ikeVersion.equals(that.ikeVersion) : that.ikeVersion != null) return false;
                if (this.localIdIPsec != null ? !this.localIdIPsec.equals(that.localIdIPsec) : that.localIdIPsec != null) return false;
                if (this.psk != null ? !this.psk.equals(that.psk) : that.psk != null) return false;
                return this.remoteId != null ? this.remoteId.equals(that.remoteId) : that.remoteId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ikeAuthAlg != null ? this.ikeAuthAlg.hashCode() : 0;
                result = 31 * result + (this.ikeEncAlg != null ? this.ikeEncAlg.hashCode() : 0);
                result = 31 * result + (this.ikeLifetime != null ? this.ikeLifetime.hashCode() : 0);
                result = 31 * result + (this.ikeMode != null ? this.ikeMode.hashCode() : 0);
                result = 31 * result + (this.ikePfs != null ? this.ikePfs.hashCode() : 0);
                result = 31 * result + (this.ikeVersion != null ? this.ikeVersion.hashCode() : 0);
                result = 31 * result + (this.localIdIPsec != null ? this.localIdIPsec.hashCode() : 0);
                result = 31 * result + (this.psk != null ? this.psk.hashCode() : 0);
                result = 31 * result + (this.remoteId != null ? this.remoteId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(IpsecConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IpsecConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIpsecAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIpsecEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getIpsecLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIpsecPfs() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IpsecConfigProperty> {
            private java.lang.String ipsecAuthAlg;
            private java.lang.String ipsecEncAlg;
            private java.lang.Number ipsecLifetime;
            private java.lang.String ipsecPfs;

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecAuthAlg}
             * @param ipsecAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecAuthAlg(java.lang.String ipsecAuthAlg) {
                this.ipsecAuthAlg = ipsecAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecEncAlg}
             * @param ipsecEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecEncAlg(java.lang.String ipsecEncAlg) {
                this.ipsecEncAlg = ipsecEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecLifetime}
             * @param ipsecLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecLifetime(java.lang.Number ipsecLifetime) {
                this.ipsecLifetime = ipsecLifetime;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecPfs}
             * @param ipsecPfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecPfs(java.lang.String ipsecPfs) {
                this.ipsecPfs = ipsecPfs;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IpsecConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IpsecConfigProperty build() {
                return new Jsii$Proxy(ipsecAuthAlg, ipsecEncAlg, ipsecLifetime, ipsecPfs);
            }
        }

        /**
         * An implementation for {@link IpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpsecConfigProperty {
            private final java.lang.String ipsecAuthAlg;
            private final java.lang.String ipsecEncAlg;
            private final java.lang.Number ipsecLifetime;
            private final java.lang.String ipsecPfs;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipsecAuthAlg = software.amazon.jsii.Kernel.get(this, "ipsecAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ipsecEncAlg = software.amazon.jsii.Kernel.get(this, "ipsecEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ipsecLifetime = software.amazon.jsii.Kernel.get(this, "ipsecLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.ipsecPfs = software.amazon.jsii.Kernel.get(this, "ipsecPfs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String ipsecAuthAlg, final java.lang.String ipsecEncAlg, final java.lang.Number ipsecLifetime, final java.lang.String ipsecPfs) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipsecAuthAlg = ipsecAuthAlg;
                this.ipsecEncAlg = ipsecEncAlg;
                this.ipsecLifetime = ipsecLifetime;
                this.ipsecPfs = ipsecPfs;
            }

            @Override
            public final java.lang.String getIpsecAuthAlg() {
                return this.ipsecAuthAlg;
            }

            @Override
            public final java.lang.String getIpsecEncAlg() {
                return this.ipsecEncAlg;
            }

            @Override
            public final java.lang.Number getIpsecLifetime() {
                return this.ipsecLifetime;
            }

            @Override
            public final java.lang.String getIpsecPfs() {
                return this.ipsecPfs;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIpsecAuthAlg() != null) {
                    data.set("ipsecAuthAlg", om.valueToTree(this.getIpsecAuthAlg()));
                }
                if (this.getIpsecEncAlg() != null) {
                    data.set("ipsecEncAlg", om.valueToTree(this.getIpsecEncAlg()));
                }
                if (this.getIpsecLifetime() != null) {
                    data.set("ipsecLifetime", om.valueToTree(this.getIpsecLifetime()));
                }
                if (this.getIpsecPfs() != null) {
                    data.set("ipsecPfs", om.valueToTree(this.getIpsecPfs()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IpsecConfigProperty.Jsii$Proxy that = (IpsecConfigProperty.Jsii$Proxy) o;

                if (this.ipsecAuthAlg != null ? !this.ipsecAuthAlg.equals(that.ipsecAuthAlg) : that.ipsecAuthAlg != null) return false;
                if (this.ipsecEncAlg != null ? !this.ipsecEncAlg.equals(that.ipsecEncAlg) : that.ipsecEncAlg != null) return false;
                if (this.ipsecLifetime != null ? !this.ipsecLifetime.equals(that.ipsecLifetime) : that.ipsecLifetime != null) return false;
                return this.ipsecPfs != null ? this.ipsecPfs.equals(that.ipsecPfs) : that.ipsecPfs == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipsecAuthAlg != null ? this.ipsecAuthAlg.hashCode() : 0;
                result = 31 * result + (this.ipsecEncAlg != null ? this.ipsecEncAlg.hashCode() : 0);
                result = 31 * result + (this.ipsecLifetime != null ? this.ipsecLifetime.hashCode() : 0);
                result = 31 * result + (this.ipsecPfs != null ? this.ipsecPfs.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosVpnConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosVpnConnection> {
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
        private final com.aliyun.ros.cdk.vpc.RosVpnConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosVpnConnectionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param customerGatewayId This parameter is required.
         */
        public Builder customerGatewayId(final java.lang.String customerGatewayId) {
            this.props.customerGatewayId(customerGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param localSubnet This parameter is required.
         */
        public Builder localSubnet(final java.lang.String localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }

        /**
         * @return {@code this}
         * @param remoteSubnet This parameter is required.
         */
        public Builder remoteSubnet(final java.lang.String remoteSubnet) {
            this.props.remoteSubnet(remoteSubnet);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpnGatewayId This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param effectImmediately This parameter is required.
         */
        public Builder effectImmediately(final java.lang.Boolean effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }
        /**
         * @return {@code this}
         * @param effectImmediately This parameter is required.
         */
        public Builder effectImmediately(final com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckConfig This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckConfig This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param ikeConfig This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param ikeConfig This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.IkeConfigProperty ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipsecConfig This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipsecConfig This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.IpsecConfigProperty ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosVpnConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosVpnConnection build() {
            return new com.aliyun.ros.cdk.vpc.RosVpnConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
