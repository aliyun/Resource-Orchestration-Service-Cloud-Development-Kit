package com.aliyun.ros.cdk.cms;

/**
 * A ROS template type:  `ALIYUN::CMS::EventRuleTargets`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.319Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRuleTargets")
public class RosEventRuleTargets extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEventRuleTargets(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEventRuleTargets(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosEventRuleTargets.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CMS::EventRuleTargets`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEventRuleTargets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosEventRuleTargetsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContactParameters() {
        return software.amazon.jsii.Kernel.get(this, "contactParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContactParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contactParameters", value);
    }

    /**
     */
    public void setContactParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "contactParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFcParameters() {
        return software.amazon.jsii.Kernel.get(this, "fcParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFcParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fcParameters", value);
    }

    /**
     */
    public void setFcParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "fcParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMnsParameters() {
        return software.amazon.jsii.Kernel.get(this, "mnsParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMnsParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mnsParameters", value);
    }

    /**
     */
    public void setMnsParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "mnsParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsParameters() {
        return software.amazon.jsii.Kernel.get(this, "slsParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsParameters", value);
    }

    /**
     */
    public void setSlsParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "slsParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebhookParameters() {
        return software.amazon.jsii.Kernel.get(this, "webhookParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebhookParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webhookParameters", value);
    }

    /**
     */
    public void setWebhookParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "webhookParameters", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(ContactParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ContactParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getContactGroupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getLevel() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ContactParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ContactParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ContactParametersProperty> {
            private java.lang.String contactGroupName;
            private java.lang.String id;
            private java.lang.String level;

            /**
             * Sets the value of {@link ContactParametersProperty#getContactGroupName}
             * @param contactGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contactGroupName(java.lang.String contactGroupName) {
                this.contactGroupName = contactGroupName;
                return this;
            }

            /**
             * Sets the value of {@link ContactParametersProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link ContactParametersProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ContactParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ContactParametersProperty build() {
                return new Jsii$Proxy(contactGroupName, id, level);
            }
        }

        /**
         * An implementation for {@link ContactParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContactParametersProperty {
            private final java.lang.String contactGroupName;
            private final java.lang.String id;
            private final java.lang.String level;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.contactGroupName = software.amazon.jsii.Kernel.get(this, "contactGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String contactGroupName, final java.lang.String id, final java.lang.String level) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.contactGroupName = contactGroupName;
                this.id = id;
                this.level = level;
            }

            @Override
            public final java.lang.String getContactGroupName() {
                return this.contactGroupName;
            }

            @Override
            public final java.lang.String getId() {
                return this.id;
            }

            @Override
            public final java.lang.String getLevel() {
                return this.level;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getContactGroupName() != null) {
                    data.set("contactGroupName", om.valueToTree(this.getContactGroupName()));
                }
                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ContactParametersProperty.Jsii$Proxy that = (ContactParametersProperty.Jsii$Proxy) o;

                if (this.contactGroupName != null ? !this.contactGroupName.equals(that.contactGroupName) : that.contactGroupName != null) return false;
                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                return this.level != null ? this.level.equals(that.level) : that.level == null;
            }

            @Override
            public final int hashCode() {
                int result = this.contactGroupName != null ? this.contactGroupName.hashCode() : 0;
                result = 31 * result + (this.id != null ? this.id.hashCode() : 0);
                result = 31 * result + (this.level != null ? this.level.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(FcParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FcParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getFunctionName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getServiceName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FcParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FcParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FcParametersProperty> {
            private java.lang.String functionName;
            private java.lang.String id;
            private java.lang.String region;
            private java.lang.String serviceName;

            /**
             * Sets the value of {@link FcParametersProperty#getFunctionName}
             * @param functionName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(java.lang.String functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link FcParametersProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link FcParametersProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link FcParametersProperty#getServiceName}
             * @param serviceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(java.lang.String serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FcParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FcParametersProperty build() {
                return new Jsii$Proxy(functionName, id, region, serviceName);
            }
        }

        /**
         * An implementation for {@link FcParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FcParametersProperty {
            private final java.lang.String functionName;
            private final java.lang.String id;
            private final java.lang.String region;
            private final java.lang.String serviceName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String functionName, final java.lang.String id, final java.lang.String region, final java.lang.String serviceName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.functionName = functionName;
                this.id = id;
                this.region = region;
                this.serviceName = serviceName;
            }

            @Override
            public final java.lang.String getFunctionName() {
                return this.functionName;
            }

            @Override
            public final java.lang.String getId() {
                return this.id;
            }

            @Override
            public final java.lang.String getRegion() {
                return this.region;
            }

            @Override
            public final java.lang.String getServiceName() {
                return this.serviceName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFunctionName() != null) {
                    data.set("functionName", om.valueToTree(this.getFunctionName()));
                }
                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }
                if (this.getServiceName() != null) {
                    data.set("serviceName", om.valueToTree(this.getServiceName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FcParametersProperty.Jsii$Proxy that = (FcParametersProperty.Jsii$Proxy) o;

                if (this.functionName != null ? !this.functionName.equals(that.functionName) : that.functionName != null) return false;
                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
                return this.serviceName != null ? this.serviceName.equals(that.serviceName) : that.serviceName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.functionName != null ? this.functionName.hashCode() : 0;
                result = 31 * result + (this.id != null ? this.id.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(MnsParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MnsParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getQueue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MnsParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MnsParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MnsParametersProperty> {
            private java.lang.String id;
            private java.lang.String queue;
            private java.lang.String region;

            /**
             * Sets the value of {@link MnsParametersProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link MnsParametersProperty#getQueue}
             * @param queue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queue(java.lang.String queue) {
                this.queue = queue;
                return this;
            }

            /**
             * Sets the value of {@link MnsParametersProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MnsParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MnsParametersProperty build() {
                return new Jsii$Proxy(id, queue, region);
            }
        }

        /**
         * An implementation for {@link MnsParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MnsParametersProperty {
            private final java.lang.String id;
            private final java.lang.String queue;
            private final java.lang.String region;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.queue = software.amazon.jsii.Kernel.get(this, "queue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String id, final java.lang.String queue, final java.lang.String region) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.id = id;
                this.queue = queue;
                this.region = region;
            }

            @Override
            public final java.lang.String getId() {
                return this.id;
            }

            @Override
            public final java.lang.String getQueue() {
                return this.queue;
            }

            @Override
            public final java.lang.String getRegion() {
                return this.region;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getQueue() != null) {
                    data.set("queue", om.valueToTree(this.getQueue()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MnsParametersProperty.Jsii$Proxy that = (MnsParametersProperty.Jsii$Proxy) o;

                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                if (this.queue != null ? !this.queue.equals(that.queue) : that.queue != null) return false;
                return this.region != null ? this.region.equals(that.region) : that.region == null;
            }

            @Override
            public final int hashCode() {
                int result = this.id != null ? this.id.hashCode() : 0;
                result = 31 * result + (this.queue != null ? this.queue.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(SlsParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SlsParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getLogStore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getProject() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SlsParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SlsParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SlsParametersProperty> {
            private java.lang.String id;
            private java.lang.String logStore;
            private java.lang.String project;
            private java.lang.String region;

            /**
             * Sets the value of {@link SlsParametersProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link SlsParametersProperty#getLogStore}
             * @param logStore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStore(java.lang.String logStore) {
                this.logStore = logStore;
                return this;
            }

            /**
             * Sets the value of {@link SlsParametersProperty#getProject}
             * @param project the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(java.lang.String project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link SlsParametersProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SlsParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SlsParametersProperty build() {
                return new Jsii$Proxy(id, logStore, project, region);
            }
        }

        /**
         * An implementation for {@link SlsParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SlsParametersProperty {
            private final java.lang.String id;
            private final java.lang.String logStore;
            private final java.lang.String project;
            private final java.lang.String region;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.logStore = software.amazon.jsii.Kernel.get(this, "logStore", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String id, final java.lang.String logStore, final java.lang.String project, final java.lang.String region) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.id = id;
                this.logStore = logStore;
                this.project = project;
                this.region = region;
            }

            @Override
            public final java.lang.String getId() {
                return this.id;
            }

            @Override
            public final java.lang.String getLogStore() {
                return this.logStore;
            }

            @Override
            public final java.lang.String getProject() {
                return this.project;
            }

            @Override
            public final java.lang.String getRegion() {
                return this.region;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getLogStore() != null) {
                    data.set("logStore", om.valueToTree(this.getLogStore()));
                }
                if (this.getProject() != null) {
                    data.set("project", om.valueToTree(this.getProject()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SlsParametersProperty.Jsii$Proxy that = (SlsParametersProperty.Jsii$Proxy) o;

                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                if (this.logStore != null ? !this.logStore.equals(that.logStore) : that.logStore != null) return false;
                if (this.project != null ? !this.project.equals(that.project) : that.project != null) return false;
                return this.region != null ? this.region.equals(that.region) : that.region == null;
            }

            @Override
            public final int hashCode() {
                int result = this.id != null ? this.id.hashCode() : 0;
                result = 31 * result + (this.logStore != null ? this.logStore.hashCode() : 0);
                result = 31 * result + (this.project != null ? this.project.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(WebhookParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WebhookParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getUrl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WebhookParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WebhookParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WebhookParametersProperty> {
            private java.lang.String id;
            private java.lang.String method;
            private java.lang.String protocol;
            private java.lang.String url;

            /**
             * Sets the value of {@link WebhookParametersProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link WebhookParametersProperty#getMethod}
             * @param method the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder method(java.lang.String method) {
                this.method = method;
                return this;
            }

            /**
             * Sets the value of {@link WebhookParametersProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link WebhookParametersProperty#getUrl}
             * @param url the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder url(java.lang.String url) {
                this.url = url;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WebhookParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WebhookParametersProperty build() {
                return new Jsii$Proxy(id, method, protocol, url);
            }
        }

        /**
         * An implementation for {@link WebhookParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebhookParametersProperty {
            private final java.lang.String id;
            private final java.lang.String method;
            private final java.lang.String protocol;
            private final java.lang.String url;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.method = software.amazon.jsii.Kernel.get(this, "method", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.url = software.amazon.jsii.Kernel.get(this, "url", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String id, final java.lang.String method, final java.lang.String protocol, final java.lang.String url) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.id = id;
                this.method = method;
                this.protocol = protocol;
                this.url = url;
            }

            @Override
            public final java.lang.String getId() {
                return this.id;
            }

            @Override
            public final java.lang.String getMethod() {
                return this.method;
            }

            @Override
            public final java.lang.String getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.String getUrl() {
                return this.url;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getMethod() != null) {
                    data.set("method", om.valueToTree(this.getMethod()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }
                if (this.getUrl() != null) {
                    data.set("url", om.valueToTree(this.getUrl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WebhookParametersProperty.Jsii$Proxy that = (WebhookParametersProperty.Jsii$Proxy) o;

                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                if (this.method != null ? !this.method.equals(that.method) : that.method != null) return false;
                if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
                return this.url != null ? this.url.equals(that.url) : that.url == null;
            }

            @Override
            public final int hashCode() {
                int result = this.id != null ? this.id.hashCode() : 0;
                result = 31 * result + (this.method != null ? this.method.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                result = 31 * result + (this.url != null ? this.url.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosEventRuleTargets}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosEventRuleTargets> {
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
        private final com.aliyun.ros.cdk.cms.RosEventRuleTargetsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosEventRuleTargetsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param contactParameters This parameter is required.
         */
        public Builder contactParameters(final com.aliyun.ros.cdk.core.IResolvable contactParameters) {
            this.props.contactParameters(contactParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param contactParameters This parameter is required.
         */
        public Builder contactParameters(final java.util.List<? extends java.lang.Object> contactParameters) {
            this.props.contactParameters(contactParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param fcParameters This parameter is required.
         */
        public Builder fcParameters(final com.aliyun.ros.cdk.core.IResolvable fcParameters) {
            this.props.fcParameters(fcParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param fcParameters This parameter is required.
         */
        public Builder fcParameters(final java.util.List<? extends java.lang.Object> fcParameters) {
            this.props.fcParameters(fcParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param mnsParameters This parameter is required.
         */
        public Builder mnsParameters(final com.aliyun.ros.cdk.core.IResolvable mnsParameters) {
            this.props.mnsParameters(mnsParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param mnsParameters This parameter is required.
         */
        public Builder mnsParameters(final java.util.List<? extends java.lang.Object> mnsParameters) {
            this.props.mnsParameters(mnsParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsParameters This parameter is required.
         */
        public Builder slsParameters(final com.aliyun.ros.cdk.core.IResolvable slsParameters) {
            this.props.slsParameters(slsParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsParameters This parameter is required.
         */
        public Builder slsParameters(final java.util.List<? extends java.lang.Object> slsParameters) {
            this.props.slsParameters(slsParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param webhookParameters This parameter is required.
         */
        public Builder webhookParameters(final com.aliyun.ros.cdk.core.IResolvable webhookParameters) {
            this.props.webhookParameters(webhookParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param webhookParameters This parameter is required.
         */
        public Builder webhookParameters(final java.util.List<? extends java.lang.Object> webhookParameters) {
            this.props.webhookParameters(webhookParameters);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.RosEventRuleTargets}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosEventRuleTargets build() {
            return new com.aliyun.ros.cdk.cms.RosEventRuleTargets(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
