package com.aliyun.ros.cdk.ddos;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DDoS::Policy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.357Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy")
public class RosPolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ddos.RosPolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddos.RosPolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContent() {
        return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getType() {
        return software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getActionType() {
        return software.amazon.jsii.Kernel.get(this, "actionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setActionType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "actionType", value);
    }

    /**
     */
    public void setActionType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "actionType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBlackIpList() {
        return software.amazon.jsii.Kernel.get(this, "blackIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBlackIpList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "blackIpList", value);
    }

    /**
     */
    public void setBlackIpList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "blackIpList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
        return software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "content", value);
    }

    /**
     */
    public void setContent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ddos.RosPolicy.ContentProperty value) {
        software.amazon.jsii.Kernel.set(this, "content", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWhiteIpList() {
        return software.amazon.jsii.Kernel.get(this, "whiteIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWhiteIpList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "whiteIpList", value);
    }

    /**
     */
    public void setWhiteIpList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "whiteIpList", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy.ConditionListProperty")
    @software.amazon.jsii.Jsii.Proxy(ConditionListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConditionListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getArg();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDepth();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPosition();

        /**
         * @return a {@link Builder} of {@link ConditionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConditionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConditionListProperty> {
            java.lang.Object arg;
            java.lang.Object depth;
            java.lang.Object position;

            /**
             * Sets the value of {@link ConditionListProperty#getArg}
             * @param arg the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arg(java.lang.String arg) {
                this.arg = arg;
                return this;
            }

            /**
             * Sets the value of {@link ConditionListProperty#getArg}
             * @param arg the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arg(com.aliyun.ros.cdk.core.IResolvable arg) {
                this.arg = arg;
                return this;
            }

            /**
             * Sets the value of {@link ConditionListProperty#getDepth}
             * @param depth the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder depth(java.lang.Number depth) {
                this.depth = depth;
                return this;
            }

            /**
             * Sets the value of {@link ConditionListProperty#getDepth}
             * @param depth the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder depth(com.aliyun.ros.cdk.core.IResolvable depth) {
                this.depth = depth;
                return this;
            }

            /**
             * Sets the value of {@link ConditionListProperty#getPosition}
             * @param position the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder position(java.lang.Number position) {
                this.position = position;
                return this;
            }

            /**
             * Sets the value of {@link ConditionListProperty#getPosition}
             * @param position the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder position(com.aliyun.ros.cdk.core.IResolvable position) {
                this.position = position;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConditionListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConditionListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConditionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConditionListProperty {
            private final java.lang.Object arg;
            private final java.lang.Object depth;
            private final java.lang.Object position;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.arg = software.amazon.jsii.Kernel.get(this, "arg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.depth = software.amazon.jsii.Kernel.get(this, "depth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.position = software.amazon.jsii.Kernel.get(this, "position", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.arg = java.util.Objects.requireNonNull(builder.arg, "arg is required");
                this.depth = java.util.Objects.requireNonNull(builder.depth, "depth is required");
                this.position = java.util.Objects.requireNonNull(builder.position, "position is required");
            }

            @Override
            public final java.lang.Object getArg() {
                return this.arg;
            }

            @Override
            public final java.lang.Object getDepth() {
                return this.depth;
            }

            @Override
            public final java.lang.Object getPosition() {
                return this.position;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("arg", om.valueToTree(this.getArg()));
                data.set("depth", om.valueToTree(this.getDepth()));
                data.set("position", om.valueToTree(this.getPosition()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosPolicy.ConditionListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConditionListProperty.Jsii$Proxy that = (ConditionListProperty.Jsii$Proxy) o;

                if (!arg.equals(that.arg)) return false;
                if (!depth.equals(that.depth)) return false;
                return this.position.equals(that.position);
            }

            @Override
            public final int hashCode() {
                int result = this.arg.hashCode();
                result = 31 * result + (this.depth.hashCode());
                result = 31 * result + (this.position.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy.ContentProperty")
    @software.amazon.jsii.Jsii.Proxy(ContentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ContentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBlackIpListExpireAt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDefense() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDropIcmp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIntelligence() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFingerPrintRuleList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIntelligenceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLayer4RuleList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPortRuleList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReflectBlockUdpPortList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionBlockCountryList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionBlockProvinceList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceBlockList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceLimit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWhitenGfbrNets() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ContentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ContentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ContentProperty> {
            java.lang.Object blackIpListExpireAt;
            java.lang.Object enableDefense;
            java.lang.Object enableDropIcmp;
            java.lang.Object enableIntelligence;
            java.lang.Object fingerPrintRuleList;
            java.lang.Object intelligenceLevel;
            java.lang.Object layer4RuleList;
            java.lang.Object portRuleList;
            java.lang.Object reflectBlockUdpPortList;
            java.lang.Object regionBlockCountryList;
            java.lang.Object regionBlockProvinceList;
            java.lang.Object sourceBlockList;
            java.lang.Object sourceLimit;
            java.lang.Object whitenGfbrNets;

            /**
             * Sets the value of {@link ContentProperty#getBlackIpListExpireAt}
             * @param blackIpListExpireAt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder blackIpListExpireAt(java.lang.Number blackIpListExpireAt) {
                this.blackIpListExpireAt = blackIpListExpireAt;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getBlackIpListExpireAt}
             * @param blackIpListExpireAt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder blackIpListExpireAt(com.aliyun.ros.cdk.core.IResolvable blackIpListExpireAt) {
                this.blackIpListExpireAt = blackIpListExpireAt;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getEnableDefense}
             * @param enableDefense the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDefense(java.lang.Boolean enableDefense) {
                this.enableDefense = enableDefense;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getEnableDefense}
             * @param enableDefense the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDefense(com.aliyun.ros.cdk.core.IResolvable enableDefense) {
                this.enableDefense = enableDefense;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getEnableDropIcmp}
             * @param enableDropIcmp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDropIcmp(java.lang.Boolean enableDropIcmp) {
                this.enableDropIcmp = enableDropIcmp;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getEnableDropIcmp}
             * @param enableDropIcmp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDropIcmp(com.aliyun.ros.cdk.core.IResolvable enableDropIcmp) {
                this.enableDropIcmp = enableDropIcmp;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getEnableIntelligence}
             * @param enableIntelligence the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableIntelligence(java.lang.Boolean enableIntelligence) {
                this.enableIntelligence = enableIntelligence;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getEnableIntelligence}
             * @param enableIntelligence the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableIntelligence(com.aliyun.ros.cdk.core.IResolvable enableIntelligence) {
                this.enableIntelligence = enableIntelligence;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getFingerPrintRuleList}
             * @param fingerPrintRuleList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fingerPrintRuleList(com.aliyun.ros.cdk.core.IResolvable fingerPrintRuleList) {
                this.fingerPrintRuleList = fingerPrintRuleList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getFingerPrintRuleList}
             * @param fingerPrintRuleList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fingerPrintRuleList(java.util.List<? extends java.lang.Object> fingerPrintRuleList) {
                this.fingerPrintRuleList = fingerPrintRuleList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getIntelligenceLevel}
             * @param intelligenceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder intelligenceLevel(java.lang.String intelligenceLevel) {
                this.intelligenceLevel = intelligenceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getIntelligenceLevel}
             * @param intelligenceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder intelligenceLevel(com.aliyun.ros.cdk.core.IResolvable intelligenceLevel) {
                this.intelligenceLevel = intelligenceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getLayer4RuleList}
             * @param layer4RuleList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder layer4RuleList(com.aliyun.ros.cdk.core.IResolvable layer4RuleList) {
                this.layer4RuleList = layer4RuleList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getLayer4RuleList}
             * @param layer4RuleList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder layer4RuleList(java.util.List<? extends java.lang.Object> layer4RuleList) {
                this.layer4RuleList = layer4RuleList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getPortRuleList}
             * @param portRuleList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRuleList(com.aliyun.ros.cdk.core.IResolvable portRuleList) {
                this.portRuleList = portRuleList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getPortRuleList}
             * @param portRuleList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRuleList(java.util.List<? extends java.lang.Object> portRuleList) {
                this.portRuleList = portRuleList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getReflectBlockUdpPortList}
             * @param reflectBlockUdpPortList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reflectBlockUdpPortList(com.aliyun.ros.cdk.core.IResolvable reflectBlockUdpPortList) {
                this.reflectBlockUdpPortList = reflectBlockUdpPortList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getReflectBlockUdpPortList}
             * @param reflectBlockUdpPortList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reflectBlockUdpPortList(java.util.List<? extends java.lang.Object> reflectBlockUdpPortList) {
                this.reflectBlockUdpPortList = reflectBlockUdpPortList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getRegionBlockCountryList}
             * @param regionBlockCountryList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionBlockCountryList(com.aliyun.ros.cdk.core.IResolvable regionBlockCountryList) {
                this.regionBlockCountryList = regionBlockCountryList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getRegionBlockCountryList}
             * @param regionBlockCountryList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionBlockCountryList(java.util.List<? extends java.lang.Object> regionBlockCountryList) {
                this.regionBlockCountryList = regionBlockCountryList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getRegionBlockProvinceList}
             * @param regionBlockProvinceList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionBlockProvinceList(com.aliyun.ros.cdk.core.IResolvable regionBlockProvinceList) {
                this.regionBlockProvinceList = regionBlockProvinceList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getRegionBlockProvinceList}
             * @param regionBlockProvinceList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionBlockProvinceList(java.util.List<? extends java.lang.Object> regionBlockProvinceList) {
                this.regionBlockProvinceList = regionBlockProvinceList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getSourceBlockList}
             * @param sourceBlockList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceBlockList(com.aliyun.ros.cdk.core.IResolvable sourceBlockList) {
                this.sourceBlockList = sourceBlockList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getSourceBlockList}
             * @param sourceBlockList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceBlockList(java.util.List<? extends java.lang.Object> sourceBlockList) {
                this.sourceBlockList = sourceBlockList;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getSourceLimit}
             * @param sourceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceLimit(com.aliyun.ros.cdk.core.IResolvable sourceLimit) {
                this.sourceLimit = sourceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getSourceLimit}
             * @param sourceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceLimit(com.aliyun.ros.cdk.ddos.RosPolicy.SourceLimitProperty sourceLimit) {
                this.sourceLimit = sourceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getWhitenGfbrNets}
             * @param whitenGfbrNets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whitenGfbrNets(java.lang.Boolean whitenGfbrNets) {
                this.whitenGfbrNets = whitenGfbrNets;
                return this;
            }

            /**
             * Sets the value of {@link ContentProperty#getWhitenGfbrNets}
             * @param whitenGfbrNets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whitenGfbrNets(com.aliyun.ros.cdk.core.IResolvable whitenGfbrNets) {
                this.whitenGfbrNets = whitenGfbrNets;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ContentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ContentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ContentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContentProperty {
            private final java.lang.Object blackIpListExpireAt;
            private final java.lang.Object enableDefense;
            private final java.lang.Object enableDropIcmp;
            private final java.lang.Object enableIntelligence;
            private final java.lang.Object fingerPrintRuleList;
            private final java.lang.Object intelligenceLevel;
            private final java.lang.Object layer4RuleList;
            private final java.lang.Object portRuleList;
            private final java.lang.Object reflectBlockUdpPortList;
            private final java.lang.Object regionBlockCountryList;
            private final java.lang.Object regionBlockProvinceList;
            private final java.lang.Object sourceBlockList;
            private final java.lang.Object sourceLimit;
            private final java.lang.Object whitenGfbrNets;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.blackIpListExpireAt = software.amazon.jsii.Kernel.get(this, "blackIpListExpireAt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableDefense = software.amazon.jsii.Kernel.get(this, "enableDefense", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableDropIcmp = software.amazon.jsii.Kernel.get(this, "enableDropIcmp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableIntelligence = software.amazon.jsii.Kernel.get(this, "enableIntelligence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fingerPrintRuleList = software.amazon.jsii.Kernel.get(this, "fingerPrintRuleList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.intelligenceLevel = software.amazon.jsii.Kernel.get(this, "intelligenceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.layer4RuleList = software.amazon.jsii.Kernel.get(this, "layer4RuleList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portRuleList = software.amazon.jsii.Kernel.get(this, "portRuleList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.reflectBlockUdpPortList = software.amazon.jsii.Kernel.get(this, "reflectBlockUdpPortList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionBlockCountryList = software.amazon.jsii.Kernel.get(this, "regionBlockCountryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionBlockProvinceList = software.amazon.jsii.Kernel.get(this, "regionBlockProvinceList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceBlockList = software.amazon.jsii.Kernel.get(this, "sourceBlockList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceLimit = software.amazon.jsii.Kernel.get(this, "sourceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.whitenGfbrNets = software.amazon.jsii.Kernel.get(this, "whitenGfbrNets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.blackIpListExpireAt = builder.blackIpListExpireAt;
                this.enableDefense = builder.enableDefense;
                this.enableDropIcmp = builder.enableDropIcmp;
                this.enableIntelligence = builder.enableIntelligence;
                this.fingerPrintRuleList = builder.fingerPrintRuleList;
                this.intelligenceLevel = builder.intelligenceLevel;
                this.layer4RuleList = builder.layer4RuleList;
                this.portRuleList = builder.portRuleList;
                this.reflectBlockUdpPortList = builder.reflectBlockUdpPortList;
                this.regionBlockCountryList = builder.regionBlockCountryList;
                this.regionBlockProvinceList = builder.regionBlockProvinceList;
                this.sourceBlockList = builder.sourceBlockList;
                this.sourceLimit = builder.sourceLimit;
                this.whitenGfbrNets = builder.whitenGfbrNets;
            }

            @Override
            public final java.lang.Object getBlackIpListExpireAt() {
                return this.blackIpListExpireAt;
            }

            @Override
            public final java.lang.Object getEnableDefense() {
                return this.enableDefense;
            }

            @Override
            public final java.lang.Object getEnableDropIcmp() {
                return this.enableDropIcmp;
            }

            @Override
            public final java.lang.Object getEnableIntelligence() {
                return this.enableIntelligence;
            }

            @Override
            public final java.lang.Object getFingerPrintRuleList() {
                return this.fingerPrintRuleList;
            }

            @Override
            public final java.lang.Object getIntelligenceLevel() {
                return this.intelligenceLevel;
            }

            @Override
            public final java.lang.Object getLayer4RuleList() {
                return this.layer4RuleList;
            }

            @Override
            public final java.lang.Object getPortRuleList() {
                return this.portRuleList;
            }

            @Override
            public final java.lang.Object getReflectBlockUdpPortList() {
                return this.reflectBlockUdpPortList;
            }

            @Override
            public final java.lang.Object getRegionBlockCountryList() {
                return this.regionBlockCountryList;
            }

            @Override
            public final java.lang.Object getRegionBlockProvinceList() {
                return this.regionBlockProvinceList;
            }

            @Override
            public final java.lang.Object getSourceBlockList() {
                return this.sourceBlockList;
            }

            @Override
            public final java.lang.Object getSourceLimit() {
                return this.sourceLimit;
            }

            @Override
            public final java.lang.Object getWhitenGfbrNets() {
                return this.whitenGfbrNets;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBlackIpListExpireAt() != null) {
                    data.set("blackIpListExpireAt", om.valueToTree(this.getBlackIpListExpireAt()));
                }
                if (this.getEnableDefense() != null) {
                    data.set("enableDefense", om.valueToTree(this.getEnableDefense()));
                }
                if (this.getEnableDropIcmp() != null) {
                    data.set("enableDropIcmp", om.valueToTree(this.getEnableDropIcmp()));
                }
                if (this.getEnableIntelligence() != null) {
                    data.set("enableIntelligence", om.valueToTree(this.getEnableIntelligence()));
                }
                if (this.getFingerPrintRuleList() != null) {
                    data.set("fingerPrintRuleList", om.valueToTree(this.getFingerPrintRuleList()));
                }
                if (this.getIntelligenceLevel() != null) {
                    data.set("intelligenceLevel", om.valueToTree(this.getIntelligenceLevel()));
                }
                if (this.getLayer4RuleList() != null) {
                    data.set("layer4RuleList", om.valueToTree(this.getLayer4RuleList()));
                }
                if (this.getPortRuleList() != null) {
                    data.set("portRuleList", om.valueToTree(this.getPortRuleList()));
                }
                if (this.getReflectBlockUdpPortList() != null) {
                    data.set("reflectBlockUdpPortList", om.valueToTree(this.getReflectBlockUdpPortList()));
                }
                if (this.getRegionBlockCountryList() != null) {
                    data.set("regionBlockCountryList", om.valueToTree(this.getRegionBlockCountryList()));
                }
                if (this.getRegionBlockProvinceList() != null) {
                    data.set("regionBlockProvinceList", om.valueToTree(this.getRegionBlockProvinceList()));
                }
                if (this.getSourceBlockList() != null) {
                    data.set("sourceBlockList", om.valueToTree(this.getSourceBlockList()));
                }
                if (this.getSourceLimit() != null) {
                    data.set("sourceLimit", om.valueToTree(this.getSourceLimit()));
                }
                if (this.getWhitenGfbrNets() != null) {
                    data.set("whitenGfbrNets", om.valueToTree(this.getWhitenGfbrNets()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosPolicy.ContentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ContentProperty.Jsii$Proxy that = (ContentProperty.Jsii$Proxy) o;

                if (this.blackIpListExpireAt != null ? !this.blackIpListExpireAt.equals(that.blackIpListExpireAt) : that.blackIpListExpireAt != null) return false;
                if (this.enableDefense != null ? !this.enableDefense.equals(that.enableDefense) : that.enableDefense != null) return false;
                if (this.enableDropIcmp != null ? !this.enableDropIcmp.equals(that.enableDropIcmp) : that.enableDropIcmp != null) return false;
                if (this.enableIntelligence != null ? !this.enableIntelligence.equals(that.enableIntelligence) : that.enableIntelligence != null) return false;
                if (this.fingerPrintRuleList != null ? !this.fingerPrintRuleList.equals(that.fingerPrintRuleList) : that.fingerPrintRuleList != null) return false;
                if (this.intelligenceLevel != null ? !this.intelligenceLevel.equals(that.intelligenceLevel) : that.intelligenceLevel != null) return false;
                if (this.layer4RuleList != null ? !this.layer4RuleList.equals(that.layer4RuleList) : that.layer4RuleList != null) return false;
                if (this.portRuleList != null ? !this.portRuleList.equals(that.portRuleList) : that.portRuleList != null) return false;
                if (this.reflectBlockUdpPortList != null ? !this.reflectBlockUdpPortList.equals(that.reflectBlockUdpPortList) : that.reflectBlockUdpPortList != null) return false;
                if (this.regionBlockCountryList != null ? !this.regionBlockCountryList.equals(that.regionBlockCountryList) : that.regionBlockCountryList != null) return false;
                if (this.regionBlockProvinceList != null ? !this.regionBlockProvinceList.equals(that.regionBlockProvinceList) : that.regionBlockProvinceList != null) return false;
                if (this.sourceBlockList != null ? !this.sourceBlockList.equals(that.sourceBlockList) : that.sourceBlockList != null) return false;
                if (this.sourceLimit != null ? !this.sourceLimit.equals(that.sourceLimit) : that.sourceLimit != null) return false;
                return this.whitenGfbrNets != null ? this.whitenGfbrNets.equals(that.whitenGfbrNets) : that.whitenGfbrNets == null;
            }

            @Override
            public final int hashCode() {
                int result = this.blackIpListExpireAt != null ? this.blackIpListExpireAt.hashCode() : 0;
                result = 31 * result + (this.enableDefense != null ? this.enableDefense.hashCode() : 0);
                result = 31 * result + (this.enableDropIcmp != null ? this.enableDropIcmp.hashCode() : 0);
                result = 31 * result + (this.enableIntelligence != null ? this.enableIntelligence.hashCode() : 0);
                result = 31 * result + (this.fingerPrintRuleList != null ? this.fingerPrintRuleList.hashCode() : 0);
                result = 31 * result + (this.intelligenceLevel != null ? this.intelligenceLevel.hashCode() : 0);
                result = 31 * result + (this.layer4RuleList != null ? this.layer4RuleList.hashCode() : 0);
                result = 31 * result + (this.portRuleList != null ? this.portRuleList.hashCode() : 0);
                result = 31 * result + (this.reflectBlockUdpPortList != null ? this.reflectBlockUdpPortList.hashCode() : 0);
                result = 31 * result + (this.regionBlockCountryList != null ? this.regionBlockCountryList.hashCode() : 0);
                result = 31 * result + (this.regionBlockProvinceList != null ? this.regionBlockProvinceList.hashCode() : 0);
                result = 31 * result + (this.sourceBlockList != null ? this.sourceBlockList.hashCode() : 0);
                result = 31 * result + (this.sourceLimit != null ? this.sourceLimit.hashCode() : 0);
                result = 31 * result + (this.whitenGfbrNets != null ? this.whitenGfbrNets.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy.FingerPrintRuleListProperty")
    @software.amazon.jsii.Jsii.Proxy(FingerPrintRuleListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FingerPrintRuleListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDstPortEnd();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDstPortStart();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMatchAction();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMaxPktLen();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMinPktLen();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSeqNo();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSrcPortEnd();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSrcPortStart();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFingerPrintRuleId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOffset() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPayloadBytes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRateValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FingerPrintRuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FingerPrintRuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FingerPrintRuleListProperty> {
            java.lang.Object dstPortEnd;
            java.lang.Object dstPortStart;
            java.lang.Object matchAction;
            java.lang.Object maxPktLen;
            java.lang.Object minPktLen;
            java.lang.Object protocol;
            java.lang.Object seqNo;
            java.lang.Object srcPortEnd;
            java.lang.Object srcPortStart;
            java.lang.Object fingerPrintRuleId;
            java.lang.Object offset;
            java.lang.Object payloadBytes;
            java.lang.Object rateValue;

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getDstPortEnd}
             * @param dstPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortEnd(java.lang.Number dstPortEnd) {
                this.dstPortEnd = dstPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getDstPortEnd}
             * @param dstPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortEnd(com.aliyun.ros.cdk.core.IResolvable dstPortEnd) {
                this.dstPortEnd = dstPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getDstPortStart}
             * @param dstPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortStart(java.lang.Number dstPortStart) {
                this.dstPortStart = dstPortStart;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getDstPortStart}
             * @param dstPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortStart(com.aliyun.ros.cdk.core.IResolvable dstPortStart) {
                this.dstPortStart = dstPortStart;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getMatchAction}
             * @param matchAction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchAction(java.lang.String matchAction) {
                this.matchAction = matchAction;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getMatchAction}
             * @param matchAction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchAction(com.aliyun.ros.cdk.core.IResolvable matchAction) {
                this.matchAction = matchAction;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getMaxPktLen}
             * @param maxPktLen the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxPktLen(java.lang.Number maxPktLen) {
                this.maxPktLen = maxPktLen;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getMaxPktLen}
             * @param maxPktLen the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxPktLen(com.aliyun.ros.cdk.core.IResolvable maxPktLen) {
                this.maxPktLen = maxPktLen;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getMinPktLen}
             * @param minPktLen the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minPktLen(java.lang.Number minPktLen) {
                this.minPktLen = minPktLen;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getMinPktLen}
             * @param minPktLen the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minPktLen(com.aliyun.ros.cdk.core.IResolvable minPktLen) {
                this.minPktLen = minPktLen;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getSeqNo}
             * @param seqNo the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder seqNo(java.lang.Number seqNo) {
                this.seqNo = seqNo;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getSeqNo}
             * @param seqNo the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder seqNo(com.aliyun.ros.cdk.core.IResolvable seqNo) {
                this.seqNo = seqNo;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getSrcPortEnd}
             * @param srcPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortEnd(java.lang.Number srcPortEnd) {
                this.srcPortEnd = srcPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getSrcPortEnd}
             * @param srcPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortEnd(com.aliyun.ros.cdk.core.IResolvable srcPortEnd) {
                this.srcPortEnd = srcPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getSrcPortStart}
             * @param srcPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortStart(java.lang.Number srcPortStart) {
                this.srcPortStart = srcPortStart;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getSrcPortStart}
             * @param srcPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortStart(com.aliyun.ros.cdk.core.IResolvable srcPortStart) {
                this.srcPortStart = srcPortStart;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getFingerPrintRuleId}
             * @param fingerPrintRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fingerPrintRuleId(java.lang.String fingerPrintRuleId) {
                this.fingerPrintRuleId = fingerPrintRuleId;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getFingerPrintRuleId}
             * @param fingerPrintRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fingerPrintRuleId(com.aliyun.ros.cdk.core.IResolvable fingerPrintRuleId) {
                this.fingerPrintRuleId = fingerPrintRuleId;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getOffset}
             * @param offset the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder offset(java.lang.Number offset) {
                this.offset = offset;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getOffset}
             * @param offset the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder offset(com.aliyun.ros.cdk.core.IResolvable offset) {
                this.offset = offset;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getPayloadBytes}
             * @param payloadBytes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payloadBytes(java.lang.String payloadBytes) {
                this.payloadBytes = payloadBytes;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getPayloadBytes}
             * @param payloadBytes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payloadBytes(com.aliyun.ros.cdk.core.IResolvable payloadBytes) {
                this.payloadBytes = payloadBytes;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getRateValue}
             * @param rateValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rateValue(java.lang.Number rateValue) {
                this.rateValue = rateValue;
                return this;
            }

            /**
             * Sets the value of {@link FingerPrintRuleListProperty#getRateValue}
             * @param rateValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rateValue(com.aliyun.ros.cdk.core.IResolvable rateValue) {
                this.rateValue = rateValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FingerPrintRuleListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FingerPrintRuleListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FingerPrintRuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FingerPrintRuleListProperty {
            private final java.lang.Object dstPortEnd;
            private final java.lang.Object dstPortStart;
            private final java.lang.Object matchAction;
            private final java.lang.Object maxPktLen;
            private final java.lang.Object minPktLen;
            private final java.lang.Object protocol;
            private final java.lang.Object seqNo;
            private final java.lang.Object srcPortEnd;
            private final java.lang.Object srcPortStart;
            private final java.lang.Object fingerPrintRuleId;
            private final java.lang.Object offset;
            private final java.lang.Object payloadBytes;
            private final java.lang.Object rateValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dstPortEnd = software.amazon.jsii.Kernel.get(this, "dstPortEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dstPortStart = software.amazon.jsii.Kernel.get(this, "dstPortStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchAction = software.amazon.jsii.Kernel.get(this, "matchAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxPktLen = software.amazon.jsii.Kernel.get(this, "maxPktLen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minPktLen = software.amazon.jsii.Kernel.get(this, "minPktLen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.seqNo = software.amazon.jsii.Kernel.get(this, "seqNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.srcPortEnd = software.amazon.jsii.Kernel.get(this, "srcPortEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.srcPortStart = software.amazon.jsii.Kernel.get(this, "srcPortStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fingerPrintRuleId = software.amazon.jsii.Kernel.get(this, "fingerPrintRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.offset = software.amazon.jsii.Kernel.get(this, "offset", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.payloadBytes = software.amazon.jsii.Kernel.get(this, "payloadBytes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rateValue = software.amazon.jsii.Kernel.get(this, "rateValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dstPortEnd = java.util.Objects.requireNonNull(builder.dstPortEnd, "dstPortEnd is required");
                this.dstPortStart = java.util.Objects.requireNonNull(builder.dstPortStart, "dstPortStart is required");
                this.matchAction = java.util.Objects.requireNonNull(builder.matchAction, "matchAction is required");
                this.maxPktLen = java.util.Objects.requireNonNull(builder.maxPktLen, "maxPktLen is required");
                this.minPktLen = java.util.Objects.requireNonNull(builder.minPktLen, "minPktLen is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
                this.seqNo = java.util.Objects.requireNonNull(builder.seqNo, "seqNo is required");
                this.srcPortEnd = java.util.Objects.requireNonNull(builder.srcPortEnd, "srcPortEnd is required");
                this.srcPortStart = java.util.Objects.requireNonNull(builder.srcPortStart, "srcPortStart is required");
                this.fingerPrintRuleId = builder.fingerPrintRuleId;
                this.offset = builder.offset;
                this.payloadBytes = builder.payloadBytes;
                this.rateValue = builder.rateValue;
            }

            @Override
            public final java.lang.Object getDstPortEnd() {
                return this.dstPortEnd;
            }

            @Override
            public final java.lang.Object getDstPortStart() {
                return this.dstPortStart;
            }

            @Override
            public final java.lang.Object getMatchAction() {
                return this.matchAction;
            }

            @Override
            public final java.lang.Object getMaxPktLen() {
                return this.maxPktLen;
            }

            @Override
            public final java.lang.Object getMinPktLen() {
                return this.minPktLen;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getSeqNo() {
                return this.seqNo;
            }

            @Override
            public final java.lang.Object getSrcPortEnd() {
                return this.srcPortEnd;
            }

            @Override
            public final java.lang.Object getSrcPortStart() {
                return this.srcPortStart;
            }

            @Override
            public final java.lang.Object getFingerPrintRuleId() {
                return this.fingerPrintRuleId;
            }

            @Override
            public final java.lang.Object getOffset() {
                return this.offset;
            }

            @Override
            public final java.lang.Object getPayloadBytes() {
                return this.payloadBytes;
            }

            @Override
            public final java.lang.Object getRateValue() {
                return this.rateValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("dstPortEnd", om.valueToTree(this.getDstPortEnd()));
                data.set("dstPortStart", om.valueToTree(this.getDstPortStart()));
                data.set("matchAction", om.valueToTree(this.getMatchAction()));
                data.set("maxPktLen", om.valueToTree(this.getMaxPktLen()));
                data.set("minPktLen", om.valueToTree(this.getMinPktLen()));
                data.set("protocol", om.valueToTree(this.getProtocol()));
                data.set("seqNo", om.valueToTree(this.getSeqNo()));
                data.set("srcPortEnd", om.valueToTree(this.getSrcPortEnd()));
                data.set("srcPortStart", om.valueToTree(this.getSrcPortStart()));
                if (this.getFingerPrintRuleId() != null) {
                    data.set("fingerPrintRuleId", om.valueToTree(this.getFingerPrintRuleId()));
                }
                if (this.getOffset() != null) {
                    data.set("offset", om.valueToTree(this.getOffset()));
                }
                if (this.getPayloadBytes() != null) {
                    data.set("payloadBytes", om.valueToTree(this.getPayloadBytes()));
                }
                if (this.getRateValue() != null) {
                    data.set("rateValue", om.valueToTree(this.getRateValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosPolicy.FingerPrintRuleListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FingerPrintRuleListProperty.Jsii$Proxy that = (FingerPrintRuleListProperty.Jsii$Proxy) o;

                if (!dstPortEnd.equals(that.dstPortEnd)) return false;
                if (!dstPortStart.equals(that.dstPortStart)) return false;
                if (!matchAction.equals(that.matchAction)) return false;
                if (!maxPktLen.equals(that.maxPktLen)) return false;
                if (!minPktLen.equals(that.minPktLen)) return false;
                if (!protocol.equals(that.protocol)) return false;
                if (!seqNo.equals(that.seqNo)) return false;
                if (!srcPortEnd.equals(that.srcPortEnd)) return false;
                if (!srcPortStart.equals(that.srcPortStart)) return false;
                if (this.fingerPrintRuleId != null ? !this.fingerPrintRuleId.equals(that.fingerPrintRuleId) : that.fingerPrintRuleId != null) return false;
                if (this.offset != null ? !this.offset.equals(that.offset) : that.offset != null) return false;
                if (this.payloadBytes != null ? !this.payloadBytes.equals(that.payloadBytes) : that.payloadBytes != null) return false;
                return this.rateValue != null ? this.rateValue.equals(that.rateValue) : that.rateValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dstPortEnd.hashCode();
                result = 31 * result + (this.dstPortStart.hashCode());
                result = 31 * result + (this.matchAction.hashCode());
                result = 31 * result + (this.maxPktLen.hashCode());
                result = 31 * result + (this.minPktLen.hashCode());
                result = 31 * result + (this.protocol.hashCode());
                result = 31 * result + (this.seqNo.hashCode());
                result = 31 * result + (this.srcPortEnd.hashCode());
                result = 31 * result + (this.srcPortStart.hashCode());
                result = 31 * result + (this.fingerPrintRuleId != null ? this.fingerPrintRuleId.hashCode() : 0);
                result = 31 * result + (this.offset != null ? this.offset.hashCode() : 0);
                result = 31 * result + (this.payloadBytes != null ? this.payloadBytes.hashCode() : 0);
                result = 31 * result + (this.rateValue != null ? this.rateValue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy.Layer4RuleListProperty")
    @software.amazon.jsii.Jsii.Proxy(Layer4RuleListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface Layer4RuleListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAction();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConditionList();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLimited();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMatch();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMethod();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

        /**
         * @return a {@link Builder} of {@link Layer4RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link Layer4RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<Layer4RuleListProperty> {
            java.lang.Object action;
            java.lang.Object conditionList;
            java.lang.Object limited;
            java.lang.Object match;
            java.lang.Object method;
            java.lang.Object name;
            java.lang.Object priority;

            /**
             * Sets the value of {@link Layer4RuleListProperty#getAction}
             * @param action the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getAction}
             * @param action the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getConditionList}
             * @param conditionList the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder conditionList(com.aliyun.ros.cdk.core.IResolvable conditionList) {
                this.conditionList = conditionList;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getConditionList}
             * @param conditionList the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder conditionList(java.util.List<? extends java.lang.Object> conditionList) {
                this.conditionList = conditionList;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getLimited}
             * @param limited the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limited(java.lang.Number limited) {
                this.limited = limited;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getLimited}
             * @param limited the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limited(com.aliyun.ros.cdk.core.IResolvable limited) {
                this.limited = limited;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(java.lang.String match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.core.IResolvable match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getMethod}
             * @param method the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder method(java.lang.String method) {
                this.method = method;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getMethod}
             * @param method the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder method(com.aliyun.ros.cdk.core.IResolvable method) {
                this.method = method;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getPriority}
             * @param priority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link Layer4RuleListProperty#getPriority}
             * @param priority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link Layer4RuleListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public Layer4RuleListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link Layer4RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Layer4RuleListProperty {
            private final java.lang.Object action;
            private final java.lang.Object conditionList;
            private final java.lang.Object limited;
            private final java.lang.Object match;
            private final java.lang.Object method;
            private final java.lang.Object name;
            private final java.lang.Object priority;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.conditionList = software.amazon.jsii.Kernel.get(this, "conditionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.limited = software.amazon.jsii.Kernel.get(this, "limited", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.match = software.amazon.jsii.Kernel.get(this, "match", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.method = software.amazon.jsii.Kernel.get(this, "method", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = java.util.Objects.requireNonNull(builder.action, "action is required");
                this.conditionList = java.util.Objects.requireNonNull(builder.conditionList, "conditionList is required");
                this.limited = java.util.Objects.requireNonNull(builder.limited, "limited is required");
                this.match = java.util.Objects.requireNonNull(builder.match, "match is required");
                this.method = java.util.Objects.requireNonNull(builder.method, "method is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getConditionList() {
                return this.conditionList;
            }

            @Override
            public final java.lang.Object getLimited() {
                return this.limited;
            }

            @Override
            public final java.lang.Object getMatch() {
                return this.match;
            }

            @Override
            public final java.lang.Object getMethod() {
                return this.method;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("action", om.valueToTree(this.getAction()));
                data.set("conditionList", om.valueToTree(this.getConditionList()));
                data.set("limited", om.valueToTree(this.getLimited()));
                data.set("match", om.valueToTree(this.getMatch()));
                data.set("method", om.valueToTree(this.getMethod()));
                data.set("name", om.valueToTree(this.getName()));
                data.set("priority", om.valueToTree(this.getPriority()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosPolicy.Layer4RuleListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                Layer4RuleListProperty.Jsii$Proxy that = (Layer4RuleListProperty.Jsii$Proxy) o;

                if (!action.equals(that.action)) return false;
                if (!conditionList.equals(that.conditionList)) return false;
                if (!limited.equals(that.limited)) return false;
                if (!match.equals(that.match)) return false;
                if (!method.equals(that.method)) return false;
                if (!name.equals(that.name)) return false;
                return this.priority.equals(that.priority);
            }

            @Override
            public final int hashCode() {
                int result = this.action.hashCode();
                result = 31 * result + (this.conditionList.hashCode());
                result = 31 * result + (this.limited.hashCode());
                result = 31 * result + (this.match.hashCode());
                result = 31 * result + (this.method.hashCode());
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.priority.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy.PortRuleListProperty")
    @software.amazon.jsii.Jsii.Proxy(PortRuleListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PortRuleListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDstPortEnd();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDstPortStart();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSeqNo();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSrcPortEnd();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSrcPortStart();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPortRuleId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PortRuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PortRuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PortRuleListProperty> {
            java.lang.Object dstPortEnd;
            java.lang.Object dstPortStart;
            java.lang.Object protocol;
            java.lang.Object seqNo;
            java.lang.Object srcPortEnd;
            java.lang.Object srcPortStart;
            java.lang.Object portRuleId;

            /**
             * Sets the value of {@link PortRuleListProperty#getDstPortEnd}
             * @param dstPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortEnd(java.lang.Number dstPortEnd) {
                this.dstPortEnd = dstPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getDstPortEnd}
             * @param dstPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortEnd(com.aliyun.ros.cdk.core.IResolvable dstPortEnd) {
                this.dstPortEnd = dstPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getDstPortStart}
             * @param dstPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortStart(java.lang.Number dstPortStart) {
                this.dstPortStart = dstPortStart;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getDstPortStart}
             * @param dstPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dstPortStart(com.aliyun.ros.cdk.core.IResolvable dstPortStart) {
                this.dstPortStart = dstPortStart;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getSeqNo}
             * @param seqNo the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder seqNo(java.lang.Number seqNo) {
                this.seqNo = seqNo;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getSeqNo}
             * @param seqNo the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder seqNo(com.aliyun.ros.cdk.core.IResolvable seqNo) {
                this.seqNo = seqNo;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getSrcPortEnd}
             * @param srcPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortEnd(java.lang.Number srcPortEnd) {
                this.srcPortEnd = srcPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getSrcPortEnd}
             * @param srcPortEnd the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortEnd(com.aliyun.ros.cdk.core.IResolvable srcPortEnd) {
                this.srcPortEnd = srcPortEnd;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getSrcPortStart}
             * @param srcPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortStart(java.lang.Number srcPortStart) {
                this.srcPortStart = srcPortStart;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getSrcPortStart}
             * @param srcPortStart the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcPortStart(com.aliyun.ros.cdk.core.IResolvable srcPortStart) {
                this.srcPortStart = srcPortStart;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getPortRuleId}
             * @param portRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRuleId(java.lang.String portRuleId) {
                this.portRuleId = portRuleId;
                return this;
            }

            /**
             * Sets the value of {@link PortRuleListProperty#getPortRuleId}
             * @param portRuleId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRuleId(com.aliyun.ros.cdk.core.IResolvable portRuleId) {
                this.portRuleId = portRuleId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PortRuleListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PortRuleListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PortRuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PortRuleListProperty {
            private final java.lang.Object dstPortEnd;
            private final java.lang.Object dstPortStart;
            private final java.lang.Object protocol;
            private final java.lang.Object seqNo;
            private final java.lang.Object srcPortEnd;
            private final java.lang.Object srcPortStart;
            private final java.lang.Object portRuleId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dstPortEnd = software.amazon.jsii.Kernel.get(this, "dstPortEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dstPortStart = software.amazon.jsii.Kernel.get(this, "dstPortStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.seqNo = software.amazon.jsii.Kernel.get(this, "seqNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.srcPortEnd = software.amazon.jsii.Kernel.get(this, "srcPortEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.srcPortStart = software.amazon.jsii.Kernel.get(this, "srcPortStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portRuleId = software.amazon.jsii.Kernel.get(this, "portRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dstPortEnd = java.util.Objects.requireNonNull(builder.dstPortEnd, "dstPortEnd is required");
                this.dstPortStart = java.util.Objects.requireNonNull(builder.dstPortStart, "dstPortStart is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
                this.seqNo = java.util.Objects.requireNonNull(builder.seqNo, "seqNo is required");
                this.srcPortEnd = java.util.Objects.requireNonNull(builder.srcPortEnd, "srcPortEnd is required");
                this.srcPortStart = java.util.Objects.requireNonNull(builder.srcPortStart, "srcPortStart is required");
                this.portRuleId = builder.portRuleId;
            }

            @Override
            public final java.lang.Object getDstPortEnd() {
                return this.dstPortEnd;
            }

            @Override
            public final java.lang.Object getDstPortStart() {
                return this.dstPortStart;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getSeqNo() {
                return this.seqNo;
            }

            @Override
            public final java.lang.Object getSrcPortEnd() {
                return this.srcPortEnd;
            }

            @Override
            public final java.lang.Object getSrcPortStart() {
                return this.srcPortStart;
            }

            @Override
            public final java.lang.Object getPortRuleId() {
                return this.portRuleId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("dstPortEnd", om.valueToTree(this.getDstPortEnd()));
                data.set("dstPortStart", om.valueToTree(this.getDstPortStart()));
                data.set("protocol", om.valueToTree(this.getProtocol()));
                data.set("seqNo", om.valueToTree(this.getSeqNo()));
                data.set("srcPortEnd", om.valueToTree(this.getSrcPortEnd()));
                data.set("srcPortStart", om.valueToTree(this.getSrcPortStart()));
                if (this.getPortRuleId() != null) {
                    data.set("portRuleId", om.valueToTree(this.getPortRuleId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosPolicy.PortRuleListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PortRuleListProperty.Jsii$Proxy that = (PortRuleListProperty.Jsii$Proxy) o;

                if (!dstPortEnd.equals(that.dstPortEnd)) return false;
                if (!dstPortStart.equals(that.dstPortStart)) return false;
                if (!protocol.equals(that.protocol)) return false;
                if (!seqNo.equals(that.seqNo)) return false;
                if (!srcPortEnd.equals(that.srcPortEnd)) return false;
                if (!srcPortStart.equals(that.srcPortStart)) return false;
                return this.portRuleId != null ? this.portRuleId.equals(that.portRuleId) : that.portRuleId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dstPortEnd.hashCode();
                result = 31 * result + (this.dstPortStart.hashCode());
                result = 31 * result + (this.protocol.hashCode());
                result = 31 * result + (this.seqNo.hashCode());
                result = 31 * result + (this.srcPortEnd.hashCode());
                result = 31 * result + (this.srcPortStart.hashCode());
                result = 31 * result + (this.portRuleId != null ? this.portRuleId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy.SourceBlockListProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceBlockListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceBlockListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getBlockExpireSeconds();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEverySeconds();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getExceedLimitTimes();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         * @return a {@link Builder} of {@link SourceBlockListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceBlockListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceBlockListProperty> {
            java.lang.Object blockExpireSeconds;
            java.lang.Object everySeconds;
            java.lang.Object exceedLimitTimes;
            java.lang.Object type;

            /**
             * Sets the value of {@link SourceBlockListProperty#getBlockExpireSeconds}
             * @param blockExpireSeconds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder blockExpireSeconds(java.lang.Number blockExpireSeconds) {
                this.blockExpireSeconds = blockExpireSeconds;
                return this;
            }

            /**
             * Sets the value of {@link SourceBlockListProperty#getBlockExpireSeconds}
             * @param blockExpireSeconds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder blockExpireSeconds(com.aliyun.ros.cdk.core.IResolvable blockExpireSeconds) {
                this.blockExpireSeconds = blockExpireSeconds;
                return this;
            }

            /**
             * Sets the value of {@link SourceBlockListProperty#getEverySeconds}
             * @param everySeconds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder everySeconds(java.lang.Number everySeconds) {
                this.everySeconds = everySeconds;
                return this;
            }

            /**
             * Sets the value of {@link SourceBlockListProperty#getEverySeconds}
             * @param everySeconds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder everySeconds(com.aliyun.ros.cdk.core.IResolvable everySeconds) {
                this.everySeconds = everySeconds;
                return this;
            }

            /**
             * Sets the value of {@link SourceBlockListProperty#getExceedLimitTimes}
             * @param exceedLimitTimes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exceedLimitTimes(java.lang.Number exceedLimitTimes) {
                this.exceedLimitTimes = exceedLimitTimes;
                return this;
            }

            /**
             * Sets the value of {@link SourceBlockListProperty#getExceedLimitTimes}
             * @param exceedLimitTimes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exceedLimitTimes(com.aliyun.ros.cdk.core.IResolvable exceedLimitTimes) {
                this.exceedLimitTimes = exceedLimitTimes;
                return this;
            }

            /**
             * Sets the value of {@link SourceBlockListProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.Number type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link SourceBlockListProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceBlockListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceBlockListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceBlockListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceBlockListProperty {
            private final java.lang.Object blockExpireSeconds;
            private final java.lang.Object everySeconds;
            private final java.lang.Object exceedLimitTimes;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.blockExpireSeconds = software.amazon.jsii.Kernel.get(this, "blockExpireSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.everySeconds = software.amazon.jsii.Kernel.get(this, "everySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.exceedLimitTimes = software.amazon.jsii.Kernel.get(this, "exceedLimitTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.blockExpireSeconds = java.util.Objects.requireNonNull(builder.blockExpireSeconds, "blockExpireSeconds is required");
                this.everySeconds = java.util.Objects.requireNonNull(builder.everySeconds, "everySeconds is required");
                this.exceedLimitTimes = java.util.Objects.requireNonNull(builder.exceedLimitTimes, "exceedLimitTimes is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            }

            @Override
            public final java.lang.Object getBlockExpireSeconds() {
                return this.blockExpireSeconds;
            }

            @Override
            public final java.lang.Object getEverySeconds() {
                return this.everySeconds;
            }

            @Override
            public final java.lang.Object getExceedLimitTimes() {
                return this.exceedLimitTimes;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("blockExpireSeconds", om.valueToTree(this.getBlockExpireSeconds()));
                data.set("everySeconds", om.valueToTree(this.getEverySeconds()));
                data.set("exceedLimitTimes", om.valueToTree(this.getExceedLimitTimes()));
                data.set("type", om.valueToTree(this.getType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosPolicy.SourceBlockListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceBlockListProperty.Jsii$Proxy that = (SourceBlockListProperty.Jsii$Proxy) o;

                if (!blockExpireSeconds.equals(that.blockExpireSeconds)) return false;
                if (!everySeconds.equals(that.everySeconds)) return false;
                if (!exceedLimitTimes.equals(that.exceedLimitTimes)) return false;
                return this.type.equals(that.type);
            }

            @Override
            public final int hashCode() {
                int result = this.blockExpireSeconds.hashCode();
                result = 31 * result + (this.everySeconds.hashCode());
                result = 31 * result + (this.exceedLimitTimes.hashCode());
                result = 31 * result + (this.type.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.RosPolicy.SourceLimitProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceLimitProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceLimitProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBps() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPps() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSynBps() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSynPps() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SourceLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceLimitProperty> {
            java.lang.Object bps;
            java.lang.Object pps;
            java.lang.Object synBps;
            java.lang.Object synPps;

            /**
             * Sets the value of {@link SourceLimitProperty#getBps}
             * @param bps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bps(java.lang.Number bps) {
                this.bps = bps;
                return this;
            }

            /**
             * Sets the value of {@link SourceLimitProperty#getBps}
             * @param bps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bps(com.aliyun.ros.cdk.core.IResolvable bps) {
                this.bps = bps;
                return this;
            }

            /**
             * Sets the value of {@link SourceLimitProperty#getPps}
             * @param pps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pps(java.lang.Number pps) {
                this.pps = pps;
                return this;
            }

            /**
             * Sets the value of {@link SourceLimitProperty#getPps}
             * @param pps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pps(com.aliyun.ros.cdk.core.IResolvable pps) {
                this.pps = pps;
                return this;
            }

            /**
             * Sets the value of {@link SourceLimitProperty#getSynBps}
             * @param synBps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder synBps(java.lang.Number synBps) {
                this.synBps = synBps;
                return this;
            }

            /**
             * Sets the value of {@link SourceLimitProperty#getSynBps}
             * @param synBps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder synBps(com.aliyun.ros.cdk.core.IResolvable synBps) {
                this.synBps = synBps;
                return this;
            }

            /**
             * Sets the value of {@link SourceLimitProperty#getSynPps}
             * @param synPps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder synPps(java.lang.Number synPps) {
                this.synPps = synPps;
                return this;
            }

            /**
             * Sets the value of {@link SourceLimitProperty#getSynPps}
             * @param synPps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder synPps(com.aliyun.ros.cdk.core.IResolvable synPps) {
                this.synPps = synPps;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceLimitProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceLimitProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceLimitProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceLimitProperty {
            private final java.lang.Object bps;
            private final java.lang.Object pps;
            private final java.lang.Object synBps;
            private final java.lang.Object synPps;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bps = software.amazon.jsii.Kernel.get(this, "bps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pps = software.amazon.jsii.Kernel.get(this, "pps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.synBps = software.amazon.jsii.Kernel.get(this, "synBps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.synPps = software.amazon.jsii.Kernel.get(this, "synPps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bps = builder.bps;
                this.pps = builder.pps;
                this.synBps = builder.synBps;
                this.synPps = builder.synPps;
            }

            @Override
            public final java.lang.Object getBps() {
                return this.bps;
            }

            @Override
            public final java.lang.Object getPps() {
                return this.pps;
            }

            @Override
            public final java.lang.Object getSynBps() {
                return this.synBps;
            }

            @Override
            public final java.lang.Object getSynPps() {
                return this.synPps;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBps() != null) {
                    data.set("bps", om.valueToTree(this.getBps()));
                }
                if (this.getPps() != null) {
                    data.set("pps", om.valueToTree(this.getPps()));
                }
                if (this.getSynBps() != null) {
                    data.set("synBps", om.valueToTree(this.getSynBps()));
                }
                if (this.getSynPps() != null) {
                    data.set("synPps", om.valueToTree(this.getSynPps()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.RosPolicy.SourceLimitProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceLimitProperty.Jsii$Proxy that = (SourceLimitProperty.Jsii$Proxy) o;

                if (this.bps != null ? !this.bps.equals(that.bps) : that.bps != null) return false;
                if (this.pps != null ? !this.pps.equals(that.pps) : that.pps != null) return false;
                if (this.synBps != null ? !this.synBps.equals(that.synBps) : that.synBps != null) return false;
                return this.synPps != null ? this.synPps.equals(that.synPps) : that.synPps == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bps != null ? this.bps.hashCode() : 0;
                result = 31 * result + (this.pps != null ? this.pps.hashCode() : 0);
                result = 31 * result + (this.synBps != null ? this.synBps.hashCode() : 0);
                result = 31 * result + (this.synPps != null ? this.synPps.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ddos.RosPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddos.RosPolicy> {
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
        private final com.aliyun.ros.cdk.ddos.RosPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddos.RosPolicyProps.Builder();
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
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return {@code this}
         * @param actionType This parameter is required.
         */
        public Builder actionType(final java.lang.String actionType) {
            this.props.actionType(actionType);
            return this;
        }
        /**
         * @return {@code this}
         * @param actionType This parameter is required.
         */
        public Builder actionType(final com.aliyun.ros.cdk.core.IResolvable actionType) {
            this.props.actionType(actionType);
            return this;
        }

        /**
         * @return {@code this}
         * @param blackIpList This parameter is required.
         */
        public Builder blackIpList(final com.aliyun.ros.cdk.core.IResolvable blackIpList) {
            this.props.blackIpList(blackIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param blackIpList This parameter is required.
         */
        public Builder blackIpList(final java.util.List<? extends java.lang.Object> blackIpList) {
            this.props.blackIpList(blackIpList);
            return this;
        }

        /**
         * @return {@code this}
         * @param content This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }
        /**
         * @return {@code this}
         * @param content This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.ddos.RosPolicy.ContentProperty content) {
            this.props.content(content);
            return this;
        }

        /**
         * @return {@code this}
         * @param whiteIpList This parameter is required.
         */
        public Builder whiteIpList(final com.aliyun.ros.cdk.core.IResolvable whiteIpList) {
            this.props.whiteIpList(whiteIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param whiteIpList This parameter is required.
         */
        public Builder whiteIpList(final java.util.List<? extends java.lang.Object> whiteIpList) {
            this.props.whiteIpList(whiteIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddos.RosPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.ddos.RosPolicy build() {
            return new com.aliyun.ros.cdk.ddos.RosPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
