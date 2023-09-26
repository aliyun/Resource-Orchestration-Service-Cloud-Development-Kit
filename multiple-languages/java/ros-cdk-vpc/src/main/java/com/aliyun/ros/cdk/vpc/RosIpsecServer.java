package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  <code>ALIYUN::VPC::IpsecServer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:48.244Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpsecServer")
public class RosIpsecServer extends com.aliyun.ros.cdk.core.RosResource {

    protected RosIpsecServer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosIpsecServer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosIpsecServer.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::VPC::IpsecServer</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosIpsecServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosIpsecServerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpsecServerId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpsecServerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpsecServerName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpsecServerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClientIpPool() {
        return software.amazon.jsii.Kernel.get(this, "clientIpPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClientIpPool(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clientIpPool", java.util.Objects.requireNonNull(value, "clientIpPool is required"));
    }

    /**
     */
    public void setClientIpPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clientIpPool", java.util.Objects.requireNonNull(value, "clientIpPool is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalSubnet() {
        return software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalSubnet(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localSubnet", java.util.Objects.requireNonNull(value, "localSubnet is required"));
    }

    /**
     */
    public void setLocalSubnet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localSubnet", java.util.Objects.requireNonNull(value, "localSubnet is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpnGatewayId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayId", java.util.Objects.requireNonNull(value, "vpnGatewayId is required"));
    }

    /**
     */
    public void setVpnGatewayId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
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
    public void setIkeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosIpsecServer.IkeConfigProperty value) {
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
    public void setIpsecConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosIpsecServer.IpsecConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ipsecConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpsecServerName() {
        return software.amazon.jsii.Kernel.get(this, "ipsecServerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpsecServerName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipsecServerName", value);
    }

    /**
     */
    public void setIpsecServerName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipsecServerName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPsk() {
        return software.amazon.jsii.Kernel.get(this, "psk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPsk(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "psk", value);
    }

    /**
     */
    public void setPsk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "psk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPskEnabled() {
        return software.amazon.jsii.Kernel.get(this, "pskEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPskEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "pskEnabled", value);
    }

    /**
     */
    public void setPskEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pskEnabled", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(IkeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IkeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkePfs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteId() {
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
            java.lang.Object ikeAuthAlg;
            java.lang.Object ikeEncAlg;
            java.lang.Object ikeLifetime;
            java.lang.Object ikeMode;
            java.lang.Object ikePfs;
            java.lang.Object ikeVersion;
            java.lang.Object localId;
            java.lang.Object remoteId;

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
             * Sets the value of {@link IkeConfigProperty#getIkeAuthAlg}
             * @param ikeAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeAuthAlg(com.aliyun.ros.cdk.core.IResolvable ikeAuthAlg) {
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
             * Sets the value of {@link IkeConfigProperty#getIkeEncAlg}
             * @param ikeEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeEncAlg(com.aliyun.ros.cdk.core.IResolvable ikeEncAlg) {
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
             * Sets the value of {@link IkeConfigProperty#getIkeLifetime}
             * @param ikeLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeLifetime(com.aliyun.ros.cdk.core.IResolvable ikeLifetime) {
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
             * Sets the value of {@link IkeConfigProperty#getIkeMode}
             * @param ikeMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeMode(com.aliyun.ros.cdk.core.IResolvable ikeMode) {
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
             * Sets the value of {@link IkeConfigProperty#getIkePfs}
             * @param ikePfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikePfs(com.aliyun.ros.cdk.core.IResolvable ikePfs) {
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
             * Sets the value of {@link IkeConfigProperty#getIkeVersion}
             * @param ikeVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeVersion(com.aliyun.ros.cdk.core.IResolvable ikeVersion) {
                this.ikeVersion = ikeVersion;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getLocalId}
             * @param localId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localId(java.lang.String localId) {
                this.localId = localId;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getLocalId}
             * @param localId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localId(com.aliyun.ros.cdk.core.IResolvable localId) {
                this.localId = localId;
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
             * Sets the value of {@link IkeConfigProperty#getRemoteId}
             * @param remoteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteId(com.aliyun.ros.cdk.core.IResolvable remoteId) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IkeConfigProperty {
            private final java.lang.Object ikeAuthAlg;
            private final java.lang.Object ikeEncAlg;
            private final java.lang.Object ikeLifetime;
            private final java.lang.Object ikeMode;
            private final java.lang.Object ikePfs;
            private final java.lang.Object ikeVersion;
            private final java.lang.Object localId;
            private final java.lang.Object remoteId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ikeAuthAlg = software.amazon.jsii.Kernel.get(this, "ikeAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeEncAlg = software.amazon.jsii.Kernel.get(this, "ikeEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeLifetime = software.amazon.jsii.Kernel.get(this, "ikeLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeMode = software.amazon.jsii.Kernel.get(this, "ikeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikePfs = software.amazon.jsii.Kernel.get(this, "ikePfs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeVersion = software.amazon.jsii.Kernel.get(this, "ikeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localId = software.amazon.jsii.Kernel.get(this, "localId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.remoteId = software.amazon.jsii.Kernel.get(this, "remoteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ikeAuthAlg = builder.ikeAuthAlg;
                this.ikeEncAlg = builder.ikeEncAlg;
                this.ikeLifetime = builder.ikeLifetime;
                this.ikeMode = builder.ikeMode;
                this.ikePfs = builder.ikePfs;
                this.ikeVersion = builder.ikeVersion;
                this.localId = builder.localId;
                this.remoteId = builder.remoteId;
            }

            @Override
            public final java.lang.Object getIkeAuthAlg() {
                return this.ikeAuthAlg;
            }

            @Override
            public final java.lang.Object getIkeEncAlg() {
                return this.ikeEncAlg;
            }

            @Override
            public final java.lang.Object getIkeLifetime() {
                return this.ikeLifetime;
            }

            @Override
            public final java.lang.Object getIkeMode() {
                return this.ikeMode;
            }

            @Override
            public final java.lang.Object getIkePfs() {
                return this.ikePfs;
            }

            @Override
            public final java.lang.Object getIkeVersion() {
                return this.ikeVersion;
            }

            @Override
            public final java.lang.Object getLocalId() {
                return this.localId;
            }

            @Override
            public final java.lang.Object getRemoteId() {
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
                if (this.getLocalId() != null) {
                    data.set("localId", om.valueToTree(this.getLocalId()));
                }
                if (this.getRemoteId() != null) {
                    data.set("remoteId", om.valueToTree(this.getRemoteId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty"));
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
                if (this.localId != null ? !this.localId.equals(that.localId) : that.localId != null) return false;
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
                result = 31 * result + (this.localId != null ? this.localId.hashCode() : 0);
                result = 31 * result + (this.remoteId != null ? this.remoteId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(IpsecConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IpsecConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecPfs() {
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
            java.lang.Object ipsecAuthAlg;
            java.lang.Object ipsecEncAlg;
            java.lang.Object ipsecLifetime;
            java.lang.Object ipsecPfs;

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
             * Sets the value of {@link IpsecConfigProperty#getIpsecAuthAlg}
             * @param ipsecAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecAuthAlg(com.aliyun.ros.cdk.core.IResolvable ipsecAuthAlg) {
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
             * Sets the value of {@link IpsecConfigProperty#getIpsecEncAlg}
             * @param ipsecEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecEncAlg(com.aliyun.ros.cdk.core.IResolvable ipsecEncAlg) {
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
             * Sets the value of {@link IpsecConfigProperty#getIpsecLifetime}
             * @param ipsecLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecLifetime(com.aliyun.ros.cdk.core.IResolvable ipsecLifetime) {
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
             * Sets the value of {@link IpsecConfigProperty#getIpsecPfs}
             * @param ipsecPfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecPfs(com.aliyun.ros.cdk.core.IResolvable ipsecPfs) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpsecConfigProperty {
            private final java.lang.Object ipsecAuthAlg;
            private final java.lang.Object ipsecEncAlg;
            private final java.lang.Object ipsecLifetime;
            private final java.lang.Object ipsecPfs;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipsecAuthAlg = software.amazon.jsii.Kernel.get(this, "ipsecAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecEncAlg = software.amazon.jsii.Kernel.get(this, "ipsecEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecLifetime = software.amazon.jsii.Kernel.get(this, "ipsecLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecPfs = software.amazon.jsii.Kernel.get(this, "ipsecPfs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipsecAuthAlg = builder.ipsecAuthAlg;
                this.ipsecEncAlg = builder.ipsecEncAlg;
                this.ipsecLifetime = builder.ipsecLifetime;
                this.ipsecPfs = builder.ipsecPfs;
            }

            @Override
            public final java.lang.Object getIpsecAuthAlg() {
                return this.ipsecAuthAlg;
            }

            @Override
            public final java.lang.Object getIpsecEncAlg() {
                return this.ipsecEncAlg;
            }

            @Override
            public final java.lang.Object getIpsecLifetime() {
                return this.ipsecLifetime;
            }

            @Override
            public final java.lang.Object getIpsecPfs() {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosIpsecServer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosIpsecServer> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.RosIpsecServerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosIpsecServerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param clientIpPool This parameter is required.
         */
        public Builder clientIpPool(final java.lang.String clientIpPool) {
            this.props.clientIpPool(clientIpPool);
            return this;
        }
        /**
         * @return {@code this}
         * @param clientIpPool This parameter is required.
         */
        public Builder clientIpPool(final com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.props.clientIpPool(clientIpPool);
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
         * @param localSubnet This parameter is required.
         */
        public Builder localSubnet(final com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.props.localSubnet(localSubnet);
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
         * @param vpnGatewayId This parameter is required.
         */
        public Builder vpnGatewayId(final com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
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
        public Builder ikeConfig(final com.aliyun.ros.cdk.vpc.RosIpsecServer.IkeConfigProperty ikeConfig) {
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
        public Builder ipsecConfig(final com.aliyun.ros.cdk.vpc.RosIpsecServer.IpsecConfigProperty ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipsecServerName This parameter is required.
         */
        public Builder ipsecServerName(final java.lang.String ipsecServerName) {
            this.props.ipsecServerName(ipsecServerName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipsecServerName This parameter is required.
         */
        public Builder ipsecServerName(final com.aliyun.ros.cdk.core.IResolvable ipsecServerName) {
            this.props.ipsecServerName(ipsecServerName);
            return this;
        }

        /**
         * @return {@code this}
         * @param psk This parameter is required.
         */
        public Builder psk(final java.lang.String psk) {
            this.props.psk(psk);
            return this;
        }
        /**
         * @return {@code this}
         * @param psk This parameter is required.
         */
        public Builder psk(final com.aliyun.ros.cdk.core.IResolvable psk) {
            this.props.psk(psk);
            return this;
        }

        /**
         * @return {@code this}
         * @param pskEnabled This parameter is required.
         */
        public Builder pskEnabled(final java.lang.Boolean pskEnabled) {
            this.props.pskEnabled(pskEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param pskEnabled This parameter is required.
         */
        public Builder pskEnabled(final com.aliyun.ros.cdk.core.IResolvable pskEnabled) {
            this.props.pskEnabled(pskEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosIpsecServer}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosIpsecServer build() {
            return new com.aliyun.ros.cdk.vpc.RosIpsecServer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
