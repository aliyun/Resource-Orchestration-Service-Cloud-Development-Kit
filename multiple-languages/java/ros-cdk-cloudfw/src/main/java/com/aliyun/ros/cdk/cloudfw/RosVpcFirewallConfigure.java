package com.aliyun.ros.cdk.cloudfw;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CLOUDFW::VpcFirewallConfigure</code>, which is used to create a virtual private cloud (VPC) firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.583Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure")
public class RosVpcFirewallConfigure extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpcFirewallConfigure(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpcFirewallConfigure(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpcFirewallConfigure(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigureProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcFirewallId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFirewallSwitch() {
        return software.amazon.jsii.Kernel.get(this, "firewallSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallSwitch(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallSwitch", java.util.Objects.requireNonNull(value, "firewallSwitch is required"));
    }

    /**
     */
    public void setFirewallSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallSwitch", java.util.Objects.requireNonNull(value, "firewallSwitch is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcCidrTableList() {
        return software.amazon.jsii.Kernel.get(this, "localVpcCidrTableList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalVpcCidrTableList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localVpcCidrTableList", java.util.Objects.requireNonNull(value, "localVpcCidrTableList is required"));
    }

    /**
     */
    public void setLocalVpcCidrTableList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "localVpcCidrTableList", java.util.Objects.requireNonNull(value, "localVpcCidrTableList is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcId() {
        return software.amazon.jsii.Kernel.get(this, "localVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localVpcId", java.util.Objects.requireNonNull(value, "localVpcId is required"));
    }

    /**
     */
    public void setLocalVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localVpcId", java.util.Objects.requireNonNull(value, "localVpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcRegion() {
        return software.amazon.jsii.Kernel.get(this, "localVpcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalVpcRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localVpcRegion", java.util.Objects.requireNonNull(value, "localVpcRegion is required"));
    }

    /**
     */
    public void setLocalVpcRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localVpcRegion", java.util.Objects.requireNonNull(value, "localVpcRegion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcCidrTableList() {
        return software.amazon.jsii.Kernel.get(this, "peerVpcCidrTableList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeerVpcCidrTableList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "peerVpcCidrTableList", java.util.Objects.requireNonNull(value, "peerVpcCidrTableList is required"));
    }

    /**
     */
    public void setPeerVpcCidrTableList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "peerVpcCidrTableList", java.util.Objects.requireNonNull(value, "peerVpcCidrTableList is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcId() {
        return software.amazon.jsii.Kernel.get(this, "peerVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeerVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "peerVpcId", java.util.Objects.requireNonNull(value, "peerVpcId is required"));
    }

    /**
     */
    public void setPeerVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "peerVpcId", java.util.Objects.requireNonNull(value, "peerVpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcRegion() {
        return software.amazon.jsii.Kernel.get(this, "peerVpcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeerVpcRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "peerVpcRegion", java.util.Objects.requireNonNull(value, "peerVpcRegion is required"));
    }

    /**
     */
    public void setPeerVpcRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "peerVpcRegion", java.util.Objects.requireNonNull(value, "peerVpcRegion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcFirewallName() {
        return software.amazon.jsii.Kernel.get(this, "vpcFirewallName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcFirewallName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallName", java.util.Objects.requireNonNull(value, "vpcFirewallName is required"));
    }

    /**
     */
    public void setVpcFirewallName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallName", java.util.Objects.requireNonNull(value, "vpcFirewallName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMemberUid() {
        return software.amazon.jsii.Kernel.get(this, "memberUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemberUid(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "memberUid", value);
    }

    /**
     */
    public void setMemberUid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memberUid", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty")
    @software.amazon.jsii.Jsii.Proxy(LocalVpcCidrTableListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LocalVpcCidrTableListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LocalVpcCidrTableListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LocalVpcCidrTableListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LocalVpcCidrTableListProperty> {
            java.lang.Object routeTableId;
            java.lang.Object routeEntryList;

            /**
             * Sets the value of {@link LocalVpcCidrTableListProperty#getRouteTableId}
             * @param routeTableId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeTableId(java.lang.String routeTableId) {
                this.routeTableId = routeTableId;
                return this;
            }

            /**
             * Sets the value of {@link LocalVpcCidrTableListProperty#getRouteTableId}
             * @param routeTableId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
                this.routeTableId = routeTableId;
                return this;
            }

            /**
             * Sets the value of {@link LocalVpcCidrTableListProperty#getRouteEntryList}
             * @param routeEntryList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeEntryList(com.aliyun.ros.cdk.core.IResolvable routeEntryList) {
                this.routeEntryList = routeEntryList;
                return this;
            }

            /**
             * Sets the value of {@link LocalVpcCidrTableListProperty#getRouteEntryList}
             * @param routeEntryList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeEntryList(java.util.List<? extends java.lang.Object> routeEntryList) {
                this.routeEntryList = routeEntryList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LocalVpcCidrTableListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LocalVpcCidrTableListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LocalVpcCidrTableListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LocalVpcCidrTableListProperty {
            private final java.lang.Object routeTableId;
            private final java.lang.Object routeEntryList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.routeEntryList = software.amazon.jsii.Kernel.get(this, "routeEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
                this.routeEntryList = builder.routeEntryList;
            }

            @Override
            public final java.lang.Object getRouteTableId() {
                return this.routeTableId;
            }

            @Override
            public final java.lang.Object getRouteEntryList() {
                return this.routeEntryList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
                if (this.getRouteEntryList() != null) {
                    data.set("routeEntryList", om.valueToTree(this.getRouteEntryList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LocalVpcCidrTableListProperty.Jsii$Proxy that = (LocalVpcCidrTableListProperty.Jsii$Proxy) o;

                if (!routeTableId.equals(that.routeTableId)) return false;
                return this.routeEntryList != null ? this.routeEntryList.equals(that.routeEntryList) : that.routeEntryList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.routeTableId.hashCode();
                result = 31 * result + (this.routeEntryList != null ? this.routeEntryList.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty")
    @software.amazon.jsii.Jsii.Proxy(PeerVpcCidrTableListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PeerVpcCidrTableListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PeerVpcCidrTableListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PeerVpcCidrTableListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PeerVpcCidrTableListProperty> {
            java.lang.Object routeTableId;
            java.lang.Object routeEntryList;

            /**
             * Sets the value of {@link PeerVpcCidrTableListProperty#getRouteTableId}
             * @param routeTableId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeTableId(java.lang.String routeTableId) {
                this.routeTableId = routeTableId;
                return this;
            }

            /**
             * Sets the value of {@link PeerVpcCidrTableListProperty#getRouteTableId}
             * @param routeTableId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
                this.routeTableId = routeTableId;
                return this;
            }

            /**
             * Sets the value of {@link PeerVpcCidrTableListProperty#getRouteEntryList}
             * @param routeEntryList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeEntryList(com.aliyun.ros.cdk.core.IResolvable routeEntryList) {
                this.routeEntryList = routeEntryList;
                return this;
            }

            /**
             * Sets the value of {@link PeerVpcCidrTableListProperty#getRouteEntryList}
             * @param routeEntryList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeEntryList(java.util.List<? extends java.lang.Object> routeEntryList) {
                this.routeEntryList = routeEntryList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PeerVpcCidrTableListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PeerVpcCidrTableListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PeerVpcCidrTableListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PeerVpcCidrTableListProperty {
            private final java.lang.Object routeTableId;
            private final java.lang.Object routeEntryList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.routeEntryList = software.amazon.jsii.Kernel.get(this, "routeEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
                this.routeEntryList = builder.routeEntryList;
            }

            @Override
            public final java.lang.Object getRouteTableId() {
                return this.routeTableId;
            }

            @Override
            public final java.lang.Object getRouteEntryList() {
                return this.routeEntryList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
                if (this.getRouteEntryList() != null) {
                    data.set("routeEntryList", om.valueToTree(this.getRouteEntryList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PeerVpcCidrTableListProperty.Jsii$Proxy that = (PeerVpcCidrTableListProperty.Jsii$Proxy) o;

                if (!routeTableId.equals(that.routeTableId)) return false;
                return this.routeEntryList != null ? this.routeEntryList.equals(that.routeEntryList) : that.routeEntryList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.routeTableId.hashCode();
                result = 31 * result + (this.routeEntryList != null ? this.routeEntryList.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListRouteEntryListProperty")
    @software.amazon.jsii.Jsii.Proxy(PeerVpcCidrTableListRouteEntryListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PeerVpcCidrTableListRouteEntryListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidr();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopInstanceId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PeerVpcCidrTableListRouteEntryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PeerVpcCidrTableListRouteEntryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PeerVpcCidrTableListRouteEntryListProperty> {
            java.lang.Object destinationCidr;
            java.lang.Object nextHopInstanceId;

            /**
             * Sets the value of {@link PeerVpcCidrTableListRouteEntryListProperty#getDestinationCidr}
             * @param destinationCidr the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidr(java.lang.String destinationCidr) {
                this.destinationCidr = destinationCidr;
                return this;
            }

            /**
             * Sets the value of {@link PeerVpcCidrTableListRouteEntryListProperty#getDestinationCidr}
             * @param destinationCidr the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidr(com.aliyun.ros.cdk.core.IResolvable destinationCidr) {
                this.destinationCidr = destinationCidr;
                return this;
            }

            /**
             * Sets the value of {@link PeerVpcCidrTableListRouteEntryListProperty#getNextHopInstanceId}
             * @param nextHopInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopInstanceId(java.lang.String nextHopInstanceId) {
                this.nextHopInstanceId = nextHopInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link PeerVpcCidrTableListRouteEntryListProperty#getNextHopInstanceId}
             * @param nextHopInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopInstanceId(com.aliyun.ros.cdk.core.IResolvable nextHopInstanceId) {
                this.nextHopInstanceId = nextHopInstanceId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PeerVpcCidrTableListRouteEntryListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PeerVpcCidrTableListRouteEntryListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PeerVpcCidrTableListRouteEntryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PeerVpcCidrTableListRouteEntryListProperty {
            private final java.lang.Object destinationCidr;
            private final java.lang.Object nextHopInstanceId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destinationCidr = software.amazon.jsii.Kernel.get(this, "destinationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nextHopInstanceId = software.amazon.jsii.Kernel.get(this, "nextHopInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destinationCidr = java.util.Objects.requireNonNull(builder.destinationCidr, "destinationCidr is required");
                this.nextHopInstanceId = builder.nextHopInstanceId;
            }

            @Override
            public final java.lang.Object getDestinationCidr() {
                return this.destinationCidr;
            }

            @Override
            public final java.lang.Object getNextHopInstanceId() {
                return this.nextHopInstanceId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("destinationCidr", om.valueToTree(this.getDestinationCidr()));
                if (this.getNextHopInstanceId() != null) {
                    data.set("nextHopInstanceId", om.valueToTree(this.getNextHopInstanceId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListRouteEntryListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PeerVpcCidrTableListRouteEntryListProperty.Jsii$Proxy that = (PeerVpcCidrTableListRouteEntryListProperty.Jsii$Proxy) o;

                if (!destinationCidr.equals(that.destinationCidr)) return false;
                return this.nextHopInstanceId != null ? this.nextHopInstanceId.equals(that.nextHopInstanceId) : that.nextHopInstanceId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.destinationCidr.hashCode();
                result = 31 * result + (this.nextHopInstanceId != null ? this.nextHopInstanceId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.RouteEntryListProperty")
    @software.amazon.jsii.Jsii.Proxy(RouteEntryListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RouteEntryListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidr();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopInstanceId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RouteEntryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RouteEntryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RouteEntryListProperty> {
            java.lang.Object destinationCidr;
            java.lang.Object nextHopInstanceId;

            /**
             * Sets the value of {@link RouteEntryListProperty#getDestinationCidr}
             * @param destinationCidr the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidr(java.lang.String destinationCidr) {
                this.destinationCidr = destinationCidr;
                return this;
            }

            /**
             * Sets the value of {@link RouteEntryListProperty#getDestinationCidr}
             * @param destinationCidr the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidr(com.aliyun.ros.cdk.core.IResolvable destinationCidr) {
                this.destinationCidr = destinationCidr;
                return this;
            }

            /**
             * Sets the value of {@link RouteEntryListProperty#getNextHopInstanceId}
             * @param nextHopInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopInstanceId(java.util.List<? extends java.lang.Object> nextHopInstanceId) {
                this.nextHopInstanceId = nextHopInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link RouteEntryListProperty#getNextHopInstanceId}
             * @param nextHopInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopInstanceId(com.aliyun.ros.cdk.core.IResolvable nextHopInstanceId) {
                this.nextHopInstanceId = nextHopInstanceId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RouteEntryListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RouteEntryListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RouteEntryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteEntryListProperty {
            private final java.lang.Object destinationCidr;
            private final java.lang.Object nextHopInstanceId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destinationCidr = software.amazon.jsii.Kernel.get(this, "destinationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nextHopInstanceId = software.amazon.jsii.Kernel.get(this, "nextHopInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destinationCidr = java.util.Objects.requireNonNull(builder.destinationCidr, "destinationCidr is required");
                this.nextHopInstanceId = builder.nextHopInstanceId;
            }

            @Override
            public final java.lang.Object getDestinationCidr() {
                return this.destinationCidr;
            }

            @Override
            public final java.lang.Object getNextHopInstanceId() {
                return this.nextHopInstanceId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("destinationCidr", om.valueToTree(this.getDestinationCidr()));
                if (this.getNextHopInstanceId() != null) {
                    data.set("nextHopInstanceId", om.valueToTree(this.getNextHopInstanceId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.RouteEntryListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RouteEntryListProperty.Jsii$Proxy that = (RouteEntryListProperty.Jsii$Proxy) o;

                if (!destinationCidr.equals(that.destinationCidr)) return false;
                return this.nextHopInstanceId != null ? this.nextHopInstanceId.equals(that.nextHopInstanceId) : that.nextHopInstanceId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.destinationCidr.hashCode();
                result = 31 * result + (this.nextHopInstanceId != null ? this.nextHopInstanceId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure> {
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
        private final com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigureProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigureProps.Builder();
        }

        /**
         * @return {@code this}
         * @param firewallSwitch This parameter is required.
         */
        public Builder firewallSwitch(final java.lang.String firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallSwitch This parameter is required.
         */
        public Builder firewallSwitch(final com.aliyun.ros.cdk.core.IResolvable firewallSwitch) {
            this.props.firewallSwitch(firewallSwitch);
            return this;
        }

        /**
         * @return {@code this}
         * @param localVpcCidrTableList This parameter is required.
         */
        public Builder localVpcCidrTableList(final com.aliyun.ros.cdk.core.IResolvable localVpcCidrTableList) {
            this.props.localVpcCidrTableList(localVpcCidrTableList);
            return this;
        }
        /**
         * @return {@code this}
         * @param localVpcCidrTableList This parameter is required.
         */
        public Builder localVpcCidrTableList(final java.util.List<? extends java.lang.Object> localVpcCidrTableList) {
            this.props.localVpcCidrTableList(localVpcCidrTableList);
            return this;
        }

        /**
         * @return {@code this}
         * @param localVpcId This parameter is required.
         */
        public Builder localVpcId(final java.lang.String localVpcId) {
            this.props.localVpcId(localVpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param localVpcId This parameter is required.
         */
        public Builder localVpcId(final com.aliyun.ros.cdk.core.IResolvable localVpcId) {
            this.props.localVpcId(localVpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param localVpcRegion This parameter is required.
         */
        public Builder localVpcRegion(final java.lang.String localVpcRegion) {
            this.props.localVpcRegion(localVpcRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param localVpcRegion This parameter is required.
         */
        public Builder localVpcRegion(final com.aliyun.ros.cdk.core.IResolvable localVpcRegion) {
            this.props.localVpcRegion(localVpcRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param peerVpcCidrTableList This parameter is required.
         */
        public Builder peerVpcCidrTableList(final com.aliyun.ros.cdk.core.IResolvable peerVpcCidrTableList) {
            this.props.peerVpcCidrTableList(peerVpcCidrTableList);
            return this;
        }
        /**
         * @return {@code this}
         * @param peerVpcCidrTableList This parameter is required.
         */
        public Builder peerVpcCidrTableList(final java.util.List<? extends java.lang.Object> peerVpcCidrTableList) {
            this.props.peerVpcCidrTableList(peerVpcCidrTableList);
            return this;
        }

        /**
         * @return {@code this}
         * @param peerVpcId This parameter is required.
         */
        public Builder peerVpcId(final java.lang.String peerVpcId) {
            this.props.peerVpcId(peerVpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param peerVpcId This parameter is required.
         */
        public Builder peerVpcId(final com.aliyun.ros.cdk.core.IResolvable peerVpcId) {
            this.props.peerVpcId(peerVpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param peerVpcRegion This parameter is required.
         */
        public Builder peerVpcRegion(final java.lang.String peerVpcRegion) {
            this.props.peerVpcRegion(peerVpcRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param peerVpcRegion This parameter is required.
         */
        public Builder peerVpcRegion(final com.aliyun.ros.cdk.core.IResolvable peerVpcRegion) {
            this.props.peerVpcRegion(peerVpcRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcFirewallName This parameter is required.
         */
        public Builder vpcFirewallName(final java.lang.String vpcFirewallName) {
            this.props.vpcFirewallName(vpcFirewallName);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcFirewallName This parameter is required.
         */
        public Builder vpcFirewallName(final com.aliyun.ros.cdk.core.IResolvable vpcFirewallName) {
            this.props.vpcFirewallName(vpcFirewallName);
            return this;
        }

        /**
         * @return {@code this}
         * @param memberUid This parameter is required.
         */
        public Builder memberUid(final java.lang.String memberUid) {
            this.props.memberUid(memberUid);
            return this;
        }
        /**
         * @return {@code this}
         * @param memberUid This parameter is required.
         */
        public Builder memberUid(final com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.props.memberUid(memberUid);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure build() {
            return new com.aliyun.ros.cdk.cloudfw.RosVpcFirewallConfigure(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
