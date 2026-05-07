package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::HoneypotProbe</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.729Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneypotProbe")
public class RosHoneypotProbe extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHoneypotProbe(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHoneypotProbe(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHoneypotProbe(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosHoneypotProbeProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArp() {
        return software.amazon.jsii.Kernel.get(this, "attrArp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrControlNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrControlNodeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotBindList() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotBindList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotProbeId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotProbeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPing() {
        return software.amazon.jsii.Kernel.get(this, "attrPing", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProbeType() {
        return software.amazon.jsii.Kernel.get(this, "attrProbeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProbeVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrProbeVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceIpList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getControlNodeId() {
        return software.amazon.jsii.Kernel.get(this, "controlNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setControlNodeId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "controlNodeId", java.util.Objects.requireNonNull(value, "controlNodeId is required"));
    }

    /**
     */
    public void setControlNodeId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "controlNodeId", java.util.Objects.requireNonNull(value, "controlNodeId is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getProbeType() {
        return software.amazon.jsii.Kernel.get(this, "probeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProbeType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "probeType", java.util.Objects.requireNonNull(value, "probeType is required"));
    }

    /**
     */
    public void setProbeType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "probeType", java.util.Objects.requireNonNull(value, "probeType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getArp() {
        return software.amazon.jsii.Kernel.get(this, "arp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArp(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "arp", value);
    }

    /**
     */
    public void setArp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "arp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBusinessGroupId() {
        return software.amazon.jsii.Kernel.get(this, "businessGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBusinessGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "businessGroupId", value);
    }

    /**
     */
    public void setBusinessGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "businessGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHoneypotBindList() {
        return software.amazon.jsii.Kernel.get(this, "honeypotBindList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHoneypotBindList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "honeypotBindList", value);
    }

    /**
     */
    public void setHoneypotBindList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe.HoneypotBindListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe.HoneypotBindListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "honeypotBindList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPing() {
        return software.amazon.jsii.Kernel.get(this, "ping", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPing(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "ping", value);
    }

    /**
     */
    public void setPing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ping", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProbeVersion() {
        return software.amazon.jsii.Kernel.get(this, "probeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProbeVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "probeVersion", value);
    }

    /**
     */
    public void setProbeVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "probeVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxyIp() {
        return software.amazon.jsii.Kernel.get(this, "proxyIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxyIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "proxyIp", value);
    }

    /**
     */
    public void setProxyIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxyIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceIpList() {
        return software.amazon.jsii.Kernel.get(this, "serviceIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceIpList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceIpList", value);
    }

    /**
     */
    public void setServiceIpList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "serviceIpList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUuid() {
        return software.amazon.jsii.Kernel.get(this, "uuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUuid(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "uuid", value);
    }

    /**
     */
    public void setUuid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uuid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.BindPortListProperty")
    @software.amazon.jsii.Jsii.Proxy(BindPortListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BindPortListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBindPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFixed() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetPort() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BindPortListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BindPortListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BindPortListProperty> {
            java.lang.Object bindPort;
            java.lang.Object endPort;
            java.lang.Object fixed;
            java.lang.Object startPort;
            java.lang.Object targetPort;

            /**
             * Sets the value of {@link BindPortListProperty#getBindPort}
             * @param bindPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bindPort(java.lang.Boolean bindPort) {
                this.bindPort = bindPort;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getBindPort}
             * @param bindPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bindPort(com.aliyun.ros.cdk.core.IResolvable bindPort) {
                this.bindPort = bindPort;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getEndPort}
             * @param endPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endPort(java.lang.Number endPort) {
                this.endPort = endPort;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getEndPort}
             * @param endPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endPort(com.aliyun.ros.cdk.core.IResolvable endPort) {
                this.endPort = endPort;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getFixed}
             * @param fixed the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fixed(java.lang.Boolean fixed) {
                this.fixed = fixed;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getFixed}
             * @param fixed the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fixed(com.aliyun.ros.cdk.core.IResolvable fixed) {
                this.fixed = fixed;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getStartPort}
             * @param startPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startPort(java.lang.Number startPort) {
                this.startPort = startPort;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getStartPort}
             * @param startPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startPort(com.aliyun.ros.cdk.core.IResolvable startPort) {
                this.startPort = startPort;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getTargetPort}
             * @param targetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetPort(java.lang.Number targetPort) {
                this.targetPort = targetPort;
                return this;
            }

            /**
             * Sets the value of {@link BindPortListProperty#getTargetPort}
             * @param targetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetPort(com.aliyun.ros.cdk.core.IResolvable targetPort) {
                this.targetPort = targetPort;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BindPortListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BindPortListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BindPortListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BindPortListProperty {
            private final java.lang.Object bindPort;
            private final java.lang.Object endPort;
            private final java.lang.Object fixed;
            private final java.lang.Object startPort;
            private final java.lang.Object targetPort;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bindPort = software.amazon.jsii.Kernel.get(this, "bindPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endPort = software.amazon.jsii.Kernel.get(this, "endPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fixed = software.amazon.jsii.Kernel.get(this, "fixed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startPort = software.amazon.jsii.Kernel.get(this, "startPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetPort = software.amazon.jsii.Kernel.get(this, "targetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bindPort = builder.bindPort;
                this.endPort = builder.endPort;
                this.fixed = builder.fixed;
                this.startPort = builder.startPort;
                this.targetPort = builder.targetPort;
            }

            @Override
            public final java.lang.Object getBindPort() {
                return this.bindPort;
            }

            @Override
            public final java.lang.Object getEndPort() {
                return this.endPort;
            }

            @Override
            public final java.lang.Object getFixed() {
                return this.fixed;
            }

            @Override
            public final java.lang.Object getStartPort() {
                return this.startPort;
            }

            @Override
            public final java.lang.Object getTargetPort() {
                return this.targetPort;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBindPort() != null) {
                    data.set("bindPort", om.valueToTree(this.getBindPort()));
                }
                if (this.getEndPort() != null) {
                    data.set("endPort", om.valueToTree(this.getEndPort()));
                }
                if (this.getFixed() != null) {
                    data.set("fixed", om.valueToTree(this.getFixed()));
                }
                if (this.getStartPort() != null) {
                    data.set("startPort", om.valueToTree(this.getStartPort()));
                }
                if (this.getTargetPort() != null) {
                    data.set("targetPort", om.valueToTree(this.getTargetPort()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.BindPortListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BindPortListProperty.Jsii$Proxy that = (BindPortListProperty.Jsii$Proxy) o;

                if (this.bindPort != null ? !this.bindPort.equals(that.bindPort) : that.bindPort != null) return false;
                if (this.endPort != null ? !this.endPort.equals(that.endPort) : that.endPort != null) return false;
                if (this.fixed != null ? !this.fixed.equals(that.fixed) : that.fixed != null) return false;
                if (this.startPort != null ? !this.startPort.equals(that.startPort) : that.startPort != null) return false;
                return this.targetPort != null ? this.targetPort.equals(that.targetPort) : that.targetPort == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bindPort != null ? this.bindPort.hashCode() : 0;
                result = 31 * result + (this.endPort != null ? this.endPort.hashCode() : 0);
                result = 31 * result + (this.fixed != null ? this.fixed.hashCode() : 0);
                result = 31 * result + (this.startPort != null ? this.startPort.hashCode() : 0);
                result = 31 * result + (this.targetPort != null ? this.targetPort.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.HoneypotBindListProperty")
    @software.amazon.jsii.Jsii.Proxy(HoneypotBindListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HoneypotBindListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBindPortList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHoneypotId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HoneypotBindListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HoneypotBindListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HoneypotBindListProperty> {
            java.lang.Object bindPortList;
            java.lang.Object honeypotId;

            /**
             * Sets the value of {@link HoneypotBindListProperty#getBindPortList}
             * @param bindPortList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bindPortList(com.aliyun.ros.cdk.core.IResolvable bindPortList) {
                this.bindPortList = bindPortList;
                return this;
            }

            /**
             * Sets the value of {@link HoneypotBindListProperty#getBindPortList}
             * @param bindPortList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bindPortList(java.util.List<? extends java.lang.Object> bindPortList) {
                this.bindPortList = bindPortList;
                return this;
            }

            /**
             * Sets the value of {@link HoneypotBindListProperty#getHoneypotId}
             * @param honeypotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder honeypotId(java.lang.String honeypotId) {
                this.honeypotId = honeypotId;
                return this;
            }

            /**
             * Sets the value of {@link HoneypotBindListProperty#getHoneypotId}
             * @param honeypotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder honeypotId(com.aliyun.ros.cdk.core.IResolvable honeypotId) {
                this.honeypotId = honeypotId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HoneypotBindListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HoneypotBindListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HoneypotBindListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HoneypotBindListProperty {
            private final java.lang.Object bindPortList;
            private final java.lang.Object honeypotId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bindPortList = software.amazon.jsii.Kernel.get(this, "bindPortList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.honeypotId = software.amazon.jsii.Kernel.get(this, "honeypotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bindPortList = builder.bindPortList;
                this.honeypotId = builder.honeypotId;
            }

            @Override
            public final java.lang.Object getBindPortList() {
                return this.bindPortList;
            }

            @Override
            public final java.lang.Object getHoneypotId() {
                return this.honeypotId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBindPortList() != null) {
                    data.set("bindPortList", om.valueToTree(this.getBindPortList()));
                }
                if (this.getHoneypotId() != null) {
                    data.set("honeypotId", om.valueToTree(this.getHoneypotId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.HoneypotBindListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HoneypotBindListProperty.Jsii$Proxy that = (HoneypotBindListProperty.Jsii$Proxy) o;

                if (this.bindPortList != null ? !this.bindPortList.equals(that.bindPortList) : that.bindPortList != null) return false;
                return this.honeypotId != null ? this.honeypotId.equals(that.honeypotId) : that.honeypotId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bindPortList != null ? this.bindPortList.hashCode() : 0;
                result = 31 * result + (this.honeypotId != null ? this.honeypotId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosHoneypotProbeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosHoneypotProbeProps.Builder();
        }

        /**
         * @return {@code this}
         * @param controlNodeId This parameter is required.
         */
        public Builder controlNodeId(final java.lang.String controlNodeId) {
            this.props.controlNodeId(controlNodeId);
            return this;
        }
        /**
         * @return {@code this}
         * @param controlNodeId This parameter is required.
         */
        public Builder controlNodeId(final com.aliyun.ros.cdk.core.IResolvable controlNodeId) {
            this.props.controlNodeId(controlNodeId);
            return this;
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
         * @param probeType This parameter is required.
         */
        public Builder probeType(final java.lang.String probeType) {
            this.props.probeType(probeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param probeType This parameter is required.
         */
        public Builder probeType(final com.aliyun.ros.cdk.core.IResolvable probeType) {
            this.props.probeType(probeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param arp This parameter is required.
         */
        public Builder arp(final java.lang.Boolean arp) {
            this.props.arp(arp);
            return this;
        }
        /**
         * @return {@code this}
         * @param arp This parameter is required.
         */
        public Builder arp(final com.aliyun.ros.cdk.core.IResolvable arp) {
            this.props.arp(arp);
            return this;
        }

        /**
         * @return {@code this}
         * @param businessGroupId This parameter is required.
         */
        public Builder businessGroupId(final java.lang.String businessGroupId) {
            this.props.businessGroupId(businessGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param businessGroupId This parameter is required.
         */
        public Builder businessGroupId(final com.aliyun.ros.cdk.core.IResolvable businessGroupId) {
            this.props.businessGroupId(businessGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param honeypotBindList This parameter is required.
         */
        public Builder honeypotBindList(final com.aliyun.ros.cdk.core.IResolvable honeypotBindList) {
            this.props.honeypotBindList(honeypotBindList);
            return this;
        }
        /**
         * @return {@code this}
         * @param honeypotBindList This parameter is required.
         */
        public Builder honeypotBindList(final java.util.List<? extends java.lang.Object> honeypotBindList) {
            this.props.honeypotBindList(honeypotBindList);
            return this;
        }

        /**
         * @return {@code this}
         * @param ping This parameter is required.
         */
        public Builder ping(final java.lang.Boolean ping) {
            this.props.ping(ping);
            return this;
        }
        /**
         * @return {@code this}
         * @param ping This parameter is required.
         */
        public Builder ping(final com.aliyun.ros.cdk.core.IResolvable ping) {
            this.props.ping(ping);
            return this;
        }

        /**
         * @return {@code this}
         * @param probeVersion This parameter is required.
         */
        public Builder probeVersion(final java.lang.String probeVersion) {
            this.props.probeVersion(probeVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param probeVersion This parameter is required.
         */
        public Builder probeVersion(final com.aliyun.ros.cdk.core.IResolvable probeVersion) {
            this.props.probeVersion(probeVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyIp This parameter is required.
         */
        public Builder proxyIp(final java.lang.String proxyIp) {
            this.props.proxyIp(proxyIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxyIp This parameter is required.
         */
        public Builder proxyIp(final com.aliyun.ros.cdk.core.IResolvable proxyIp) {
            this.props.proxyIp(proxyIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceIpList This parameter is required.
         */
        public Builder serviceIpList(final com.aliyun.ros.cdk.core.IResolvable serviceIpList) {
            this.props.serviceIpList(serviceIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceIpList This parameter is required.
         */
        public Builder serviceIpList(final java.util.List<? extends java.lang.Object> serviceIpList) {
            this.props.serviceIpList(serviceIpList);
            return this;
        }

        /**
         * @return {@code this}
         * @param uuid This parameter is required.
         */
        public Builder uuid(final java.lang.String uuid) {
            this.props.uuid(uuid);
            return this;
        }
        /**
         * @return {@code this}
         * @param uuid This parameter is required.
         */
        public Builder uuid(final com.aliyun.ros.cdk.core.IResolvable uuid) {
            this.props.uuid(uuid);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe build() {
            return new com.aliyun.ros.cdk.threatdetection.RosHoneypotProbe(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
