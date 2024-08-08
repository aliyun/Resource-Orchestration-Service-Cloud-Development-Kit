package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::TrafficMirrorFilter</code>, which is used to create a filter for traffic mirroring.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:14.800Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter")
public class RosTrafficMirrorFilter extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrafficMirrorFilter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrafficMirrorFilter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrafficMirrorFilter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEgressRules() {
        return software.amazon.jsii.Kernel.get(this, "attrEgressRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIngressRules() {
        return software.amazon.jsii.Kernel.get(this, "attrIngressRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorFilterDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorFilterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorFilterName() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorFilterName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEgressRules() {
        return software.amazon.jsii.Kernel.get(this, "egressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEgressRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "egressRules", value);
    }

    /**
     */
    public void setEgressRules(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter.EgressRulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter.EgressRulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "egressRules", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIngressRules() {
        return software.amazon.jsii.Kernel.get(this, "ingressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIngressRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ingressRules", value);
    }

    /**
     */
    public void setIngressRules(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter.IngressRulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter.IngressRulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ingressRules", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorFilterDescription() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorFilterDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorFilterDescription", value);
    }

    /**
     */
    public void setTrafficMirrorFilterDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorFilterDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorFilterName() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorFilterName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorFilterName", value);
    }

    /**
     */
    public void setTrafficMirrorFilterName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorFilterName", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.EgressRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(EgressRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EgressRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAction();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlock() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationPortRange() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrBlock() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePortRange() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EgressRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EgressRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EgressRulesProperty> {
            java.lang.Object action;
            java.lang.Object protocol;
            java.lang.Object destinationCidrBlock;
            java.lang.Object destinationPortRange;
            java.lang.Object priority;
            java.lang.Object sourceCidrBlock;
            java.lang.Object sourcePortRange;

            /**
             * Sets the value of {@link EgressRulesProperty#getAction}
             * @param action the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getAction}
             * @param action the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getDestinationCidrBlock}
             * @param destinationCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
                this.destinationCidrBlock = destinationCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getDestinationCidrBlock}
             * @param destinationCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
                this.destinationCidrBlock = destinationCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getDestinationPortRange}
             * @param destinationPortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationPortRange(java.lang.String destinationPortRange) {
                this.destinationPortRange = destinationPortRange;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getDestinationPortRange}
             * @param destinationPortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationPortRange(com.aliyun.ros.cdk.core.IResolvable destinationPortRange) {
                this.destinationPortRange = destinationPortRange;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getSourceCidrBlock}
             * @param sourceCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrBlock(java.lang.String sourceCidrBlock) {
                this.sourceCidrBlock = sourceCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getSourceCidrBlock}
             * @param sourceCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrBlock(com.aliyun.ros.cdk.core.IResolvable sourceCidrBlock) {
                this.sourceCidrBlock = sourceCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(java.lang.String sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Sets the value of {@link EgressRulesProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EgressRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EgressRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EgressRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EgressRulesProperty {
            private final java.lang.Object action;
            private final java.lang.Object protocol;
            private final java.lang.Object destinationCidrBlock;
            private final java.lang.Object destinationPortRange;
            private final java.lang.Object priority;
            private final java.lang.Object sourceCidrBlock;
            private final java.lang.Object sourcePortRange;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destinationPortRange = software.amazon.jsii.Kernel.get(this, "destinationPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceCidrBlock = software.amazon.jsii.Kernel.get(this, "sourceCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = java.util.Objects.requireNonNull(builder.action, "action is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
                this.destinationCidrBlock = builder.destinationCidrBlock;
                this.destinationPortRange = builder.destinationPortRange;
                this.priority = builder.priority;
                this.sourceCidrBlock = builder.sourceCidrBlock;
                this.sourcePortRange = builder.sourcePortRange;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getDestinationCidrBlock() {
                return this.destinationCidrBlock;
            }

            @Override
            public final java.lang.Object getDestinationPortRange() {
                return this.destinationPortRange;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getSourceCidrBlock() {
                return this.sourceCidrBlock;
            }

            @Override
            public final java.lang.Object getSourcePortRange() {
                return this.sourcePortRange;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("action", om.valueToTree(this.getAction()));
                data.set("protocol", om.valueToTree(this.getProtocol()));
                if (this.getDestinationCidrBlock() != null) {
                    data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));
                }
                if (this.getDestinationPortRange() != null) {
                    data.set("destinationPortRange", om.valueToTree(this.getDestinationPortRange()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getSourceCidrBlock() != null) {
                    data.set("sourceCidrBlock", om.valueToTree(this.getSourceCidrBlock()));
                }
                if (this.getSourcePortRange() != null) {
                    data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.EgressRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EgressRulesProperty.Jsii$Proxy that = (EgressRulesProperty.Jsii$Proxy) o;

                if (!action.equals(that.action)) return false;
                if (!protocol.equals(that.protocol)) return false;
                if (this.destinationCidrBlock != null ? !this.destinationCidrBlock.equals(that.destinationCidrBlock) : that.destinationCidrBlock != null) return false;
                if (this.destinationPortRange != null ? !this.destinationPortRange.equals(that.destinationPortRange) : that.destinationPortRange != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                if (this.sourceCidrBlock != null ? !this.sourceCidrBlock.equals(that.sourceCidrBlock) : that.sourceCidrBlock != null) return false;
                return this.sourcePortRange != null ? this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action.hashCode();
                result = 31 * result + (this.protocol.hashCode());
                result = 31 * result + (this.destinationCidrBlock != null ? this.destinationCidrBlock.hashCode() : 0);
                result = 31 * result + (this.destinationPortRange != null ? this.destinationPortRange.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.sourceCidrBlock != null ? this.sourceCidrBlock.hashCode() : 0);
                result = 31 * result + (this.sourcePortRange != null ? this.sourcePortRange.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.IngressRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(IngressRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IngressRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAction();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlock() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationPortRange() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrBlock() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePortRange() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IngressRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IngressRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IngressRulesProperty> {
            java.lang.Object action;
            java.lang.Object protocol;
            java.lang.Object destinationCidrBlock;
            java.lang.Object destinationPortRange;
            java.lang.Object priority;
            java.lang.Object sourceCidrBlock;
            java.lang.Object sourcePortRange;

            /**
             * Sets the value of {@link IngressRulesProperty#getAction}
             * @param action the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getAction}
             * @param action the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getDestinationCidrBlock}
             * @param destinationCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
                this.destinationCidrBlock = destinationCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getDestinationCidrBlock}
             * @param destinationCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
                this.destinationCidrBlock = destinationCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getDestinationPortRange}
             * @param destinationPortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationPortRange(java.lang.String destinationPortRange) {
                this.destinationPortRange = destinationPortRange;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getDestinationPortRange}
             * @param destinationPortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destinationPortRange(com.aliyun.ros.cdk.core.IResolvable destinationPortRange) {
                this.destinationPortRange = destinationPortRange;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getSourceCidrBlock}
             * @param sourceCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrBlock(java.lang.String sourceCidrBlock) {
                this.sourceCidrBlock = sourceCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getSourceCidrBlock}
             * @param sourceCidrBlock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCidrBlock(com.aliyun.ros.cdk.core.IResolvable sourceCidrBlock) {
                this.sourceCidrBlock = sourceCidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(java.lang.String sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Sets the value of {@link IngressRulesProperty#getSourcePortRange}
             * @param sourcePortRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
                this.sourcePortRange = sourcePortRange;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IngressRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IngressRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IngressRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IngressRulesProperty {
            private final java.lang.Object action;
            private final java.lang.Object protocol;
            private final java.lang.Object destinationCidrBlock;
            private final java.lang.Object destinationPortRange;
            private final java.lang.Object priority;
            private final java.lang.Object sourceCidrBlock;
            private final java.lang.Object sourcePortRange;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destinationPortRange = software.amazon.jsii.Kernel.get(this, "destinationPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceCidrBlock = software.amazon.jsii.Kernel.get(this, "sourceCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = java.util.Objects.requireNonNull(builder.action, "action is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
                this.destinationCidrBlock = builder.destinationCidrBlock;
                this.destinationPortRange = builder.destinationPortRange;
                this.priority = builder.priority;
                this.sourceCidrBlock = builder.sourceCidrBlock;
                this.sourcePortRange = builder.sourcePortRange;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getDestinationCidrBlock() {
                return this.destinationCidrBlock;
            }

            @Override
            public final java.lang.Object getDestinationPortRange() {
                return this.destinationPortRange;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getSourceCidrBlock() {
                return this.sourceCidrBlock;
            }

            @Override
            public final java.lang.Object getSourcePortRange() {
                return this.sourcePortRange;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("action", om.valueToTree(this.getAction()));
                data.set("protocol", om.valueToTree(this.getProtocol()));
                if (this.getDestinationCidrBlock() != null) {
                    data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));
                }
                if (this.getDestinationPortRange() != null) {
                    data.set("destinationPortRange", om.valueToTree(this.getDestinationPortRange()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getSourceCidrBlock() != null) {
                    data.set("sourceCidrBlock", om.valueToTree(this.getSourceCidrBlock()));
                }
                if (this.getSourcePortRange() != null) {
                    data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficMirrorFilter.IngressRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IngressRulesProperty.Jsii$Proxy that = (IngressRulesProperty.Jsii$Proxy) o;

                if (!action.equals(that.action)) return false;
                if (!protocol.equals(that.protocol)) return false;
                if (this.destinationCidrBlock != null ? !this.destinationCidrBlock.equals(that.destinationCidrBlock) : that.destinationCidrBlock != null) return false;
                if (this.destinationPortRange != null ? !this.destinationPortRange.equals(that.destinationPortRange) : that.destinationPortRange != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                if (this.sourceCidrBlock != null ? !this.sourceCidrBlock.equals(that.sourceCidrBlock) : that.sourceCidrBlock != null) return false;
                return this.sourcePortRange != null ? this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action.hashCode();
                result = 31 * result + (this.protocol.hashCode());
                result = 31 * result + (this.destinationCidrBlock != null ? this.destinationCidrBlock.hashCode() : 0);
                result = 31 * result + (this.destinationPortRange != null ? this.destinationPortRange.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.sourceCidrBlock != null ? this.sourceCidrBlock.hashCode() : 0);
                result = 31 * result + (this.sourcePortRange != null ? this.sourcePortRange.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter> {
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
        private final com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param egressRules This parameter is required.
         */
        public Builder egressRules(final com.aliyun.ros.cdk.core.IResolvable egressRules) {
            this.props.egressRules(egressRules);
            return this;
        }
        /**
         * @return {@code this}
         * @param egressRules This parameter is required.
         */
        public Builder egressRules(final java.util.List<? extends java.lang.Object> egressRules) {
            this.props.egressRules(egressRules);
            return this;
        }

        /**
         * @return {@code this}
         * @param ingressRules This parameter is required.
         */
        public Builder ingressRules(final com.aliyun.ros.cdk.core.IResolvable ingressRules) {
            this.props.ingressRules(ingressRules);
            return this;
        }
        /**
         * @return {@code this}
         * @param ingressRules This parameter is required.
         */
        public Builder ingressRules(final java.util.List<? extends java.lang.Object> ingressRules) {
            this.props.ingressRules(ingressRules);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorFilterDescription This parameter is required.
         */
        public Builder trafficMirrorFilterDescription(final java.lang.String trafficMirrorFilterDescription) {
            this.props.trafficMirrorFilterDescription(trafficMirrorFilterDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorFilterDescription This parameter is required.
         */
        public Builder trafficMirrorFilterDescription(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterDescription) {
            this.props.trafficMirrorFilterDescription(trafficMirrorFilterDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorFilterName This parameter is required.
         */
        public Builder trafficMirrorFilterName(final java.lang.String trafficMirrorFilterName) {
            this.props.trafficMirrorFilterName(trafficMirrorFilterName);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorFilterName This parameter is required.
         */
        public Builder trafficMirrorFilterName(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterName) {
            this.props.trafficMirrorFilterName(trafficMirrorFilterName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter build() {
            return new com.aliyun.ros.cdk.vpc.RosTrafficMirrorFilter(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
