package com.aliyun.ros.cdk.cloudfw;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CLOUDFW::TrFirewallRoutePolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.441Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy")
public class RosTrFirewallRoutePolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrFirewallRoutePolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrFirewallRoutePolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrFirewallRoutePolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "attrFirewallId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrFirewallRoutePolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrFirewallRoutePolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getFirewallId() {
        return software.amazon.jsii.Kernel.get(this, "firewallId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirewallId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "firewallId", java.util.Objects.requireNonNull(value, "firewallId is required"));
    }

    /**
     */
    public void setFirewallId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firewallId", java.util.Objects.requireNonNull(value, "firewallId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyDescription() {
        return software.amazon.jsii.Kernel.get(this, "policyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyDescription", java.util.Objects.requireNonNull(value, "policyDescription is required"));
    }

    /**
     */
    public void setPolicyDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyDescription", java.util.Objects.requireNonNull(value, "policyDescription is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyName", java.util.Objects.requireNonNull(value, "policyName is required"));
    }

    /**
     */
    public void setPolicyName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyName", java.util.Objects.requireNonNull(value, "policyName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType() {
        return software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyType", java.util.Objects.requireNonNull(value, "policyType is required"));
    }

    /**
     */
    public void setPolicyType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyType", java.util.Objects.requireNonNull(value, "policyType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestCandidateList() {
        return software.amazon.jsii.Kernel.get(this, "destCandidateList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestCandidateList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destCandidateList", value);
    }

    /**
     */
    public void setDestCandidateList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "destCandidateList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSrcCandidateList() {
        return software.amazon.jsii.Kernel.get(this, "srcCandidateList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSrcCandidateList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "srcCandidateList", value);
    }

    /**
     */
    public void setSrcCandidateList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "srcCandidateList", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty")
    @software.amazon.jsii.Jsii.Proxy(DestCandidateListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DestCandidateListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCandidateId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCandidateType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DestCandidateListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DestCandidateListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DestCandidateListProperty> {
            java.lang.Object candidateId;
            java.lang.Object candidateType;

            /**
             * Sets the value of {@link DestCandidateListProperty#getCandidateId}
             * @param candidateId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateId(java.lang.String candidateId) {
                this.candidateId = candidateId;
                return this;
            }

            /**
             * Sets the value of {@link DestCandidateListProperty#getCandidateId}
             * @param candidateId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateId(com.aliyun.ros.cdk.core.IResolvable candidateId) {
                this.candidateId = candidateId;
                return this;
            }

            /**
             * Sets the value of {@link DestCandidateListProperty#getCandidateType}
             * @param candidateType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateType(java.lang.String candidateType) {
                this.candidateType = candidateType;
                return this;
            }

            /**
             * Sets the value of {@link DestCandidateListProperty#getCandidateType}
             * @param candidateType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateType(com.aliyun.ros.cdk.core.IResolvable candidateType) {
                this.candidateType = candidateType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DestCandidateListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DestCandidateListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DestCandidateListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DestCandidateListProperty {
            private final java.lang.Object candidateId;
            private final java.lang.Object candidateType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.candidateId = software.amazon.jsii.Kernel.get(this, "candidateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.candidateType = software.amazon.jsii.Kernel.get(this, "candidateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.candidateId = java.util.Objects.requireNonNull(builder.candidateId, "candidateId is required");
                this.candidateType = builder.candidateType;
            }

            @Override
            public final java.lang.Object getCandidateId() {
                return this.candidateId;
            }

            @Override
            public final java.lang.Object getCandidateType() {
                return this.candidateType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("candidateId", om.valueToTree(this.getCandidateId()));
                if (this.getCandidateType() != null) {
                    data.set("candidateType", om.valueToTree(this.getCandidateType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DestCandidateListProperty.Jsii$Proxy that = (DestCandidateListProperty.Jsii$Proxy) o;

                if (!candidateId.equals(that.candidateId)) return false;
                return this.candidateType != null ? this.candidateType.equals(that.candidateType) : that.candidateType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.candidateId.hashCode();
                result = 31 * result + (this.candidateType != null ? this.candidateType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty")
    @software.amazon.jsii.Jsii.Proxy(SrcCandidateListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SrcCandidateListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCandidateId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCandidateType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SrcCandidateListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SrcCandidateListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SrcCandidateListProperty> {
            java.lang.Object candidateId;
            java.lang.Object candidateType;

            /**
             * Sets the value of {@link SrcCandidateListProperty#getCandidateId}
             * @param candidateId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateId(java.lang.String candidateId) {
                this.candidateId = candidateId;
                return this;
            }

            /**
             * Sets the value of {@link SrcCandidateListProperty#getCandidateId}
             * @param candidateId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateId(com.aliyun.ros.cdk.core.IResolvable candidateId) {
                this.candidateId = candidateId;
                return this;
            }

            /**
             * Sets the value of {@link SrcCandidateListProperty#getCandidateType}
             * @param candidateType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateType(java.lang.String candidateType) {
                this.candidateType = candidateType;
                return this;
            }

            /**
             * Sets the value of {@link SrcCandidateListProperty#getCandidateType}
             * @param candidateType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder candidateType(com.aliyun.ros.cdk.core.IResolvable candidateType) {
                this.candidateType = candidateType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SrcCandidateListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SrcCandidateListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SrcCandidateListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SrcCandidateListProperty {
            private final java.lang.Object candidateId;
            private final java.lang.Object candidateType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.candidateId = software.amazon.jsii.Kernel.get(this, "candidateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.candidateType = software.amazon.jsii.Kernel.get(this, "candidateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.candidateId = java.util.Objects.requireNonNull(builder.candidateId, "candidateId is required");
                this.candidateType = builder.candidateType;
            }

            @Override
            public final java.lang.Object getCandidateId() {
                return this.candidateId;
            }

            @Override
            public final java.lang.Object getCandidateType() {
                return this.candidateType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("candidateId", om.valueToTree(this.getCandidateId()));
                if (this.getCandidateType() != null) {
                    data.set("candidateType", om.valueToTree(this.getCandidateType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SrcCandidateListProperty.Jsii$Proxy that = (SrcCandidateListProperty.Jsii$Proxy) o;

                if (!candidateId.equals(that.candidateId)) return false;
                return this.candidateType != null ? this.candidateType.equals(that.candidateType) : that.candidateType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.candidateId.hashCode();
                result = 31 * result + (this.candidateType != null ? this.candidateType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy> {
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
        private final com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param firewallId This parameter is required.
         */
        public Builder firewallId(final java.lang.String firewallId) {
            this.props.firewallId(firewallId);
            return this;
        }
        /**
         * @return {@code this}
         * @param firewallId This parameter is required.
         */
        public Builder firewallId(final com.aliyun.ros.cdk.core.IResolvable firewallId) {
            this.props.firewallId(firewallId);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyDescription This parameter is required.
         */
        public Builder policyDescription(final java.lang.String policyDescription) {
            this.props.policyDescription(policyDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyDescription This parameter is required.
         */
        public Builder policyDescription(final com.aliyun.ros.cdk.core.IResolvable policyDescription) {
            this.props.policyDescription(policyDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyName This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyName This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyType This parameter is required.
         */
        public Builder policyType(final java.lang.String policyType) {
            this.props.policyType(policyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyType This parameter is required.
         */
        public Builder policyType(final com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.props.policyType(policyType);
            return this;
        }

        /**
         * @return {@code this}
         * @param destCandidateList This parameter is required.
         */
        public Builder destCandidateList(final com.aliyun.ros.cdk.core.IResolvable destCandidateList) {
            this.props.destCandidateList(destCandidateList);
            return this;
        }
        /**
         * @return {@code this}
         * @param destCandidateList This parameter is required.
         */
        public Builder destCandidateList(final java.util.List<? extends java.lang.Object> destCandidateList) {
            this.props.destCandidateList(destCandidateList);
            return this;
        }

        /**
         * @return {@code this}
         * @param srcCandidateList This parameter is required.
         */
        public Builder srcCandidateList(final com.aliyun.ros.cdk.core.IResolvable srcCandidateList) {
            this.props.srcCandidateList(srcCandidateList);
            return this;
        }
        /**
         * @return {@code this}
         * @param srcCandidateList This parameter is required.
         */
        public Builder srcCandidateList(final java.util.List<? extends java.lang.Object> srcCandidateList) {
            this.props.srcCandidateList(srcCandidateList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy build() {
            return new com.aliyun.ros.cdk.cloudfw.RosTrFirewallRoutePolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
