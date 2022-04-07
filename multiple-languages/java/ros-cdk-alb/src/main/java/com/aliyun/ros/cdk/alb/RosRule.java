package com.aliyun.ros.cdk.alb;

/**
 * A ROS template type:  `ALIYUN::ALB::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.316Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule")
public class RosRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.alb.RosRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ALB::Rule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RosRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerId() {
        return software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleActions() {
        return software.amazon.jsii.Kernel.get(this, "ruleActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleActions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleActions", java.util.Objects.requireNonNull(value, "ruleActions is required"));
    }

    /**
     */
    public void setRuleActions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "ruleActions", java.util.Objects.requireNonNull(value, "ruleActions is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleConditions() {
        return software.amazon.jsii.Kernel.get(this, "ruleConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleConditions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleConditions", java.util.Objects.requireNonNull(value, "ruleConditions is required"));
    }

    /**
     */
    public void setRuleConditions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "ruleConditions", java.util.Objects.requireNonNull(value, "ruleConditions is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDirection() {
        return software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDirection(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "direction", value);
    }

    /**
     */
    public void setDirection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "direction", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CookieConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CookieConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CookieConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CookieConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CookieConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link CookieConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link CookieConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CookieConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CookieConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CookieConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CookieConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CookieConfigProperty.Jsii$Proxy that = (CookieConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(FixedResponseConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FixedResponseConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpCode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FixedResponseConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FixedResponseConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FixedResponseConfigProperty> {
            java.lang.Object content;
            java.lang.Object contentType;
            java.lang.Object httpCode;

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(java.lang.String content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContentType}
             * @param contentType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentType(java.lang.String contentType) {
                this.contentType = contentType;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getContentType}
             * @param contentType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentType(com.aliyun.ros.cdk.core.IResolvable contentType) {
                this.contentType = contentType;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(java.lang.String httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link FixedResponseConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(com.aliyun.ros.cdk.core.IResolvable httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FixedResponseConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FixedResponseConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FixedResponseConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FixedResponseConfigProperty {
            private final java.lang.Object content;
            private final java.lang.Object contentType;
            private final java.lang.Object httpCode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentType = software.amazon.jsii.Kernel.get(this, "contentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpCode = software.amazon.jsii.Kernel.get(this, "httpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.content = builder.content;
                this.contentType = builder.contentType;
                this.httpCode = builder.httpCode;
            }

            @Override
            public final java.lang.Object getContent() {
                return this.content;
            }

            @Override
            public final java.lang.Object getContentType() {
                return this.contentType;
            }

            @Override
            public final java.lang.Object getHttpCode() {
                return this.httpCode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getContent() != null) {
                    data.set("content", om.valueToTree(this.getContent()));
                }
                if (this.getContentType() != null) {
                    data.set("contentType", om.valueToTree(this.getContentType()));
                }
                if (this.getHttpCode() != null) {
                    data.set("httpCode", om.valueToTree(this.getHttpCode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FixedResponseConfigProperty.Jsii$Proxy that = (FixedResponseConfigProperty.Jsii$Proxy) o;

                if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
                if (this.contentType != null ? !this.contentType.equals(that.contentType) : that.contentType != null) return false;
                return this.httpCode != null ? this.httpCode.equals(that.httpCode) : that.httpCode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.content != null ? this.content.hashCode() : 0;
                result = 31 * result + (this.contentType != null ? this.contentType.hashCode() : 0);
                result = 31 * result + (this.httpCode != null ? this.httpCode.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ForwardGroupConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ForwardGroupConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupTuples() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ForwardGroupConfigProperty> {
            java.lang.Object serverGroupTuples;

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(com.aliyun.ros.cdk.core.IResolvable serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(java.util.List<? extends java.lang.Object> serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ForwardGroupConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ForwardGroupConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ForwardGroupConfigProperty {
            private final java.lang.Object serverGroupTuples;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupTuples = software.amazon.jsii.Kernel.get(this, "serverGroupTuples", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupTuples = builder.serverGroupTuples;
            }

            @Override
            public final java.lang.Object getServerGroupTuples() {
                return this.serverGroupTuples;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getServerGroupTuples() != null) {
                    data.set("serverGroupTuples", om.valueToTree(this.getServerGroupTuples()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ForwardGroupConfigProperty.Jsii$Proxy that = (ForwardGroupConfigProperty.Jsii$Proxy) o;

                return this.serverGroupTuples != null ? this.serverGroupTuples.equals(that.serverGroupTuples) : that.serverGroupTuples == null;
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupTuples != null ? this.serverGroupTuples.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HeaderConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HeaderConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HeaderConfigProperty> {
            java.lang.Object key;
            java.lang.Object values;

            /**
             * Sets the value of {@link HeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link HeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HeaderConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HeaderConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HeaderConfigProperty {
            private final java.lang.Object key;
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HeaderConfigProperty.Jsii$Proxy that = (HeaderConfigProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.values != null ? this.values.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.HostConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HostConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HostConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HostConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HostConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HostConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link HostConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link HostConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HostConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HostConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HostConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.HostConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HostConfigProperty.Jsii$Proxy that = (HostConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(InsertHeaderConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InsertHeaderConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValueType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InsertHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InsertHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InsertHeaderConfigProperty> {
            java.lang.Object key;
            java.lang.Object value;
            java.lang.Object valueType;

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValueType}
             * @param valueType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder valueType(java.lang.String valueType) {
                this.valueType = valueType;
                return this;
            }

            /**
             * Sets the value of {@link InsertHeaderConfigProperty#getValueType}
             * @param valueType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder valueType(com.aliyun.ros.cdk.core.IResolvable valueType) {
                this.valueType = valueType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InsertHeaderConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InsertHeaderConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InsertHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InsertHeaderConfigProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;
            private final java.lang.Object valueType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.valueType = software.amazon.jsii.Kernel.get(this, "valueType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
                this.valueType = builder.valueType;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            public final java.lang.Object getValueType() {
                return this.valueType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }
                if (this.getValueType() != null) {
                    data.set("valueType", om.valueToTree(this.getValueType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InsertHeaderConfigProperty.Jsii$Proxy that = (InsertHeaderConfigProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.value != null ? !this.value.equals(that.value) : that.value != null) return false;
                return this.valueType != null ? this.valueType.equals(that.valueType) : that.valueType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                result = 31 * result + (this.valueType != null ? this.valueType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(MethodConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MethodConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MethodConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MethodConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MethodConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link MethodConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link MethodConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MethodConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MethodConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MethodConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MethodConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MethodConfigProperty.Jsii$Proxy that = (MethodConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.PathConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(PathConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PathConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PathConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PathConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PathConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link PathConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link PathConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PathConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PathConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PathConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PathConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.PathConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PathConfigProperty.Jsii$Proxy that = (PathConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryStringConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryStringConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueryStringConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryStringConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryStringConfigProperty> {
            java.lang.Object values;

            /**
             * Sets the value of {@link QueryStringConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueryStringConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryStringConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryStringConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryStringConfigProperty {
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryStringConfigProperty.Jsii$Proxy that = (QueryStringConfigProperty.Jsii$Proxy) o;

                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.values != null ? this.values.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryStringConfigValuesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryStringConfigValuesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueryStringConfigValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryStringConfigValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryStringConfigValuesProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringConfigValuesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueryStringConfigValuesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryStringConfigValuesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryStringConfigValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryStringConfigValuesProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryStringConfigValuesProperty.Jsii$Proxy that = (QueryStringConfigValuesProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RedirectConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RedirectConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuery() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RedirectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RedirectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RedirectConfigProperty> {
            java.lang.Object host;
            java.lang.Object httpCode;
            java.lang.Object path;
            java.lang.Object port;
            java.lang.Object protocol;
            java.lang.Object query;

            /**
             * Sets the value of {@link RedirectConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(java.lang.Number httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(com.aliyun.ros.cdk.core.IResolvable httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(java.lang.String query) {
                this.query = query;
                return this;
            }

            /**
             * Sets the value of {@link RedirectConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(com.aliyun.ros.cdk.core.IResolvable query) {
                this.query = query;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RedirectConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RedirectConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RedirectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RedirectConfigProperty {
            private final java.lang.Object host;
            private final java.lang.Object httpCode;
            private final java.lang.Object path;
            private final java.lang.Object port;
            private final java.lang.Object protocol;
            private final java.lang.Object query;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpCode = software.amazon.jsii.Kernel.get(this, "httpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.query = software.amazon.jsii.Kernel.get(this, "query", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.httpCode = builder.httpCode;
                this.path = builder.path;
                this.port = builder.port;
                this.protocol = builder.protocol;
                this.query = builder.query;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getHttpCode() {
                return this.httpCode;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getQuery() {
                return this.query;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getHttpCode() != null) {
                    data.set("httpCode", om.valueToTree(this.getHttpCode()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }
                if (this.getQuery() != null) {
                    data.set("query", om.valueToTree(this.getQuery()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RedirectConfigProperty.Jsii$Proxy that = (RedirectConfigProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.httpCode != null ? !this.httpCode.equals(that.httpCode) : that.httpCode != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
                return this.query != null ? this.query.equals(that.query) : that.query == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.httpCode != null ? this.httpCode.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                result = 31 * result + (this.query != null ? this.query.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ResponseHeaderConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResponseHeaderConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResponseHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResponseHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResponseHeaderConfigProperty> {
            java.lang.Object key;
            java.lang.Object values;

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
                this.values = values;
                return this;
            }

            /**
             * Sets the value of {@link ResponseHeaderConfigProperty#getValues}
             * @param values the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder values(java.util.List<? extends java.lang.Object> values) {
                this.values = values;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResponseHeaderConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResponseHeaderConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResponseHeaderConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResponseHeaderConfigProperty {
            private final java.lang.Object key;
            private final java.lang.Object values;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.values = builder.values;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValues() {
                return this.values;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValues() != null) {
                    data.set("values", om.valueToTree(this.getValues()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResponseHeaderConfigProperty.Jsii$Proxy that = (ResponseHeaderConfigProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.values != null ? this.values.equals(that.values) : that.values == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.values != null ? this.values.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RewriteConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RewriteConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuery() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RewriteConfigProperty> {
            java.lang.Object host;
            java.lang.Object path;
            java.lang.Object query;

            /**
             * Sets the value of {@link RewriteConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(java.lang.String query) {
                this.query = query;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getQuery}
             * @param query the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(com.aliyun.ros.cdk.core.IResolvable query) {
                this.query = query;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RewriteConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RewriteConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RewriteConfigProperty {
            private final java.lang.Object host;
            private final java.lang.Object path;
            private final java.lang.Object query;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.query = software.amazon.jsii.Kernel.get(this, "query", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.path = builder.path;
                this.query = builder.query;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getQuery() {
                return this.query;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getQuery() != null) {
                    data.set("query", om.valueToTree(this.getQuery()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RewriteConfigProperty.Jsii$Proxy that = (RewriteConfigProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                return this.query != null ? this.query.equals(that.query) : that.query == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.query != null ? this.query.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleActionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleActionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOrder();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFixedResponseConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getForwardGroupConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInsertHeaderConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedirectConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRewriteConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleActionsProperty> {
            java.lang.Object order;
            java.lang.Object type;
            java.lang.Object fixedResponseConfig;
            java.lang.Object forwardGroupConfig;
            java.lang.Object insertHeaderConfig;
            java.lang.Object redirectConfig;
            java.lang.Object rewriteConfig;

            /**
             * Sets the value of {@link RuleActionsProperty#getOrder}
             * @param order the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder order(java.lang.Number order) {
                this.order = order;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getOrder}
             * @param order the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder order(com.aliyun.ros.cdk.core.IResolvable order) {
                this.order = order;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getFixedResponseConfig}
             * @param fixedResponseConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fixedResponseConfig(com.aliyun.ros.cdk.core.IResolvable fixedResponseConfig) {
                this.fixedResponseConfig = fixedResponseConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getFixedResponseConfig}
             * @param fixedResponseConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fixedResponseConfig(com.aliyun.ros.cdk.alb.RosRule.FixedResponseConfigProperty fixedResponseConfig) {
                this.fixedResponseConfig = fixedResponseConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getForwardGroupConfig}
             * @param forwardGroupConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardGroupConfig(com.aliyun.ros.cdk.core.IResolvable forwardGroupConfig) {
                this.forwardGroupConfig = forwardGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getForwardGroupConfig}
             * @param forwardGroupConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardGroupConfig(com.aliyun.ros.cdk.alb.RosRule.ForwardGroupConfigProperty forwardGroupConfig) {
                this.forwardGroupConfig = forwardGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getInsertHeaderConfig}
             * @param insertHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder insertHeaderConfig(com.aliyun.ros.cdk.core.IResolvable insertHeaderConfig) {
                this.insertHeaderConfig = insertHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getInsertHeaderConfig}
             * @param insertHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder insertHeaderConfig(com.aliyun.ros.cdk.alb.RosRule.InsertHeaderConfigProperty insertHeaderConfig) {
                this.insertHeaderConfig = insertHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRedirectConfig}
             * @param redirectConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectConfig(com.aliyun.ros.cdk.core.IResolvable redirectConfig) {
                this.redirectConfig = redirectConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRedirectConfig}
             * @param redirectConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectConfig(com.aliyun.ros.cdk.alb.RosRule.RedirectConfigProperty redirectConfig) {
                this.redirectConfig = redirectConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRewriteConfig}
             * @param rewriteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewriteConfig(com.aliyun.ros.cdk.core.IResolvable rewriteConfig) {
                this.rewriteConfig = rewriteConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleActionsProperty#getRewriteConfig}
             * @param rewriteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewriteConfig(com.aliyun.ros.cdk.alb.RosRule.RewriteConfigProperty rewriteConfig) {
                this.rewriteConfig = rewriteConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleActionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleActionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuleActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleActionsProperty {
            private final java.lang.Object order;
            private final java.lang.Object type;
            private final java.lang.Object fixedResponseConfig;
            private final java.lang.Object forwardGroupConfig;
            private final java.lang.Object insertHeaderConfig;
            private final java.lang.Object redirectConfig;
            private final java.lang.Object rewriteConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.order = software.amazon.jsii.Kernel.get(this, "order", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fixedResponseConfig = software.amazon.jsii.Kernel.get(this, "fixedResponseConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.forwardGroupConfig = software.amazon.jsii.Kernel.get(this, "forwardGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.insertHeaderConfig = software.amazon.jsii.Kernel.get(this, "insertHeaderConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redirectConfig = software.amazon.jsii.Kernel.get(this, "redirectConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rewriteConfig = software.amazon.jsii.Kernel.get(this, "rewriteConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.order = java.util.Objects.requireNonNull(builder.order, "order is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.fixedResponseConfig = builder.fixedResponseConfig;
                this.forwardGroupConfig = builder.forwardGroupConfig;
                this.insertHeaderConfig = builder.insertHeaderConfig;
                this.redirectConfig = builder.redirectConfig;
                this.rewriteConfig = builder.rewriteConfig;
            }

            @Override
            public final java.lang.Object getOrder() {
                return this.order;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getFixedResponseConfig() {
                return this.fixedResponseConfig;
            }

            @Override
            public final java.lang.Object getForwardGroupConfig() {
                return this.forwardGroupConfig;
            }

            @Override
            public final java.lang.Object getInsertHeaderConfig() {
                return this.insertHeaderConfig;
            }

            @Override
            public final java.lang.Object getRedirectConfig() {
                return this.redirectConfig;
            }

            @Override
            public final java.lang.Object getRewriteConfig() {
                return this.rewriteConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("order", om.valueToTree(this.getOrder()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getFixedResponseConfig() != null) {
                    data.set("fixedResponseConfig", om.valueToTree(this.getFixedResponseConfig()));
                }
                if (this.getForwardGroupConfig() != null) {
                    data.set("forwardGroupConfig", om.valueToTree(this.getForwardGroupConfig()));
                }
                if (this.getInsertHeaderConfig() != null) {
                    data.set("insertHeaderConfig", om.valueToTree(this.getInsertHeaderConfig()));
                }
                if (this.getRedirectConfig() != null) {
                    data.set("redirectConfig", om.valueToTree(this.getRedirectConfig()));
                }
                if (this.getRewriteConfig() != null) {
                    data.set("rewriteConfig", om.valueToTree(this.getRewriteConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleActionsProperty.Jsii$Proxy that = (RuleActionsProperty.Jsii$Proxy) o;

                if (!order.equals(that.order)) return false;
                if (!type.equals(that.type)) return false;
                if (this.fixedResponseConfig != null ? !this.fixedResponseConfig.equals(that.fixedResponseConfig) : that.fixedResponseConfig != null) return false;
                if (this.forwardGroupConfig != null ? !this.forwardGroupConfig.equals(that.forwardGroupConfig) : that.forwardGroupConfig != null) return false;
                if (this.insertHeaderConfig != null ? !this.insertHeaderConfig.equals(that.insertHeaderConfig) : that.insertHeaderConfig != null) return false;
                if (this.redirectConfig != null ? !this.redirectConfig.equals(that.redirectConfig) : that.redirectConfig != null) return false;
                return this.rewriteConfig != null ? this.rewriteConfig.equals(that.rewriteConfig) : that.rewriteConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.order.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.fixedResponseConfig != null ? this.fixedResponseConfig.hashCode() : 0);
                result = 31 * result + (this.forwardGroupConfig != null ? this.forwardGroupConfig.hashCode() : 0);
                result = 31 * result + (this.insertHeaderConfig != null ? this.insertHeaderConfig.hashCode() : 0);
                result = 31 * result + (this.redirectConfig != null ? this.redirectConfig.hashCode() : 0);
                result = 31 * result + (this.rewriteConfig != null ? this.rewriteConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleConditionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleConditionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCookieConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeaderConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMethodConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPathConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueryStringConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseHeaderConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleConditionsProperty> {
            java.lang.Object type;
            java.lang.Object cookieConfig;
            java.lang.Object headerConfig;
            java.lang.Object hostConfig;
            java.lang.Object methodConfig;
            java.lang.Object pathConfig;
            java.lang.Object queryStringConfig;
            java.lang.Object responseHeaderConfig;

            /**
             * Sets the value of {@link RuleConditionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getCookieConfig}
             * @param cookieConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieConfig(com.aliyun.ros.cdk.core.IResolvable cookieConfig) {
                this.cookieConfig = cookieConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getCookieConfig}
             * @param cookieConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieConfig(com.aliyun.ros.cdk.alb.RosRule.CookieConfigProperty cookieConfig) {
                this.cookieConfig = cookieConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHeaderConfig}
             * @param headerConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerConfig(com.aliyun.ros.cdk.core.IResolvable headerConfig) {
                this.headerConfig = headerConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHeaderConfig}
             * @param headerConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerConfig(com.aliyun.ros.cdk.alb.RosRule.HeaderConfigProperty headerConfig) {
                this.headerConfig = headerConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHostConfig}
             * @param hostConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostConfig(com.aliyun.ros.cdk.core.IResolvable hostConfig) {
                this.hostConfig = hostConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getHostConfig}
             * @param hostConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostConfig(com.aliyun.ros.cdk.alb.RosRule.HostConfigProperty hostConfig) {
                this.hostConfig = hostConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getMethodConfig}
             * @param methodConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methodConfig(com.aliyun.ros.cdk.core.IResolvable methodConfig) {
                this.methodConfig = methodConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getMethodConfig}
             * @param methodConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methodConfig(com.aliyun.ros.cdk.alb.RosRule.MethodConfigProperty methodConfig) {
                this.methodConfig = methodConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getPathConfig}
             * @param pathConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathConfig(com.aliyun.ros.cdk.core.IResolvable pathConfig) {
                this.pathConfig = pathConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getPathConfig}
             * @param pathConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathConfig(com.aliyun.ros.cdk.alb.RosRule.PathConfigProperty pathConfig) {
                this.pathConfig = pathConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getQueryStringConfig}
             * @param queryStringConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryStringConfig(com.aliyun.ros.cdk.core.IResolvable queryStringConfig) {
                this.queryStringConfig = queryStringConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getQueryStringConfig}
             * @param queryStringConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryStringConfig(com.aliyun.ros.cdk.alb.RosRule.QueryStringConfigProperty queryStringConfig) {
                this.queryStringConfig = queryStringConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getResponseHeaderConfig}
             * @param responseHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseHeaderConfig(com.aliyun.ros.cdk.core.IResolvable responseHeaderConfig) {
                this.responseHeaderConfig = responseHeaderConfig;
                return this;
            }

            /**
             * Sets the value of {@link RuleConditionsProperty#getResponseHeaderConfig}
             * @param responseHeaderConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseHeaderConfig(com.aliyun.ros.cdk.alb.RosRule.ResponseHeaderConfigProperty responseHeaderConfig) {
                this.responseHeaderConfig = responseHeaderConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleConditionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleConditionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuleConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleConditionsProperty {
            private final java.lang.Object type;
            private final java.lang.Object cookieConfig;
            private final java.lang.Object headerConfig;
            private final java.lang.Object hostConfig;
            private final java.lang.Object methodConfig;
            private final java.lang.Object pathConfig;
            private final java.lang.Object queryStringConfig;
            private final java.lang.Object responseHeaderConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cookieConfig = software.amazon.jsii.Kernel.get(this, "cookieConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.headerConfig = software.amazon.jsii.Kernel.get(this, "headerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostConfig = software.amazon.jsii.Kernel.get(this, "hostConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.methodConfig = software.amazon.jsii.Kernel.get(this, "methodConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pathConfig = software.amazon.jsii.Kernel.get(this, "pathConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryStringConfig = software.amazon.jsii.Kernel.get(this, "queryStringConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseHeaderConfig = software.amazon.jsii.Kernel.get(this, "responseHeaderConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.cookieConfig = builder.cookieConfig;
                this.headerConfig = builder.headerConfig;
                this.hostConfig = builder.hostConfig;
                this.methodConfig = builder.methodConfig;
                this.pathConfig = builder.pathConfig;
                this.queryStringConfig = builder.queryStringConfig;
                this.responseHeaderConfig = builder.responseHeaderConfig;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getCookieConfig() {
                return this.cookieConfig;
            }

            @Override
            public final java.lang.Object getHeaderConfig() {
                return this.headerConfig;
            }

            @Override
            public final java.lang.Object getHostConfig() {
                return this.hostConfig;
            }

            @Override
            public final java.lang.Object getMethodConfig() {
                return this.methodConfig;
            }

            @Override
            public final java.lang.Object getPathConfig() {
                return this.pathConfig;
            }

            @Override
            public final java.lang.Object getQueryStringConfig() {
                return this.queryStringConfig;
            }

            @Override
            public final java.lang.Object getResponseHeaderConfig() {
                return this.responseHeaderConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("type", om.valueToTree(this.getType()));
                if (this.getCookieConfig() != null) {
                    data.set("cookieConfig", om.valueToTree(this.getCookieConfig()));
                }
                if (this.getHeaderConfig() != null) {
                    data.set("headerConfig", om.valueToTree(this.getHeaderConfig()));
                }
                if (this.getHostConfig() != null) {
                    data.set("hostConfig", om.valueToTree(this.getHostConfig()));
                }
                if (this.getMethodConfig() != null) {
                    data.set("methodConfig", om.valueToTree(this.getMethodConfig()));
                }
                if (this.getPathConfig() != null) {
                    data.set("pathConfig", om.valueToTree(this.getPathConfig()));
                }
                if (this.getQueryStringConfig() != null) {
                    data.set("queryStringConfig", om.valueToTree(this.getQueryStringConfig()));
                }
                if (this.getResponseHeaderConfig() != null) {
                    data.set("responseHeaderConfig", om.valueToTree(this.getResponseHeaderConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleConditionsProperty.Jsii$Proxy that = (RuleConditionsProperty.Jsii$Proxy) o;

                if (!type.equals(that.type)) return false;
                if (this.cookieConfig != null ? !this.cookieConfig.equals(that.cookieConfig) : that.cookieConfig != null) return false;
                if (this.headerConfig != null ? !this.headerConfig.equals(that.headerConfig) : that.headerConfig != null) return false;
                if (this.hostConfig != null ? !this.hostConfig.equals(that.hostConfig) : that.hostConfig != null) return false;
                if (this.methodConfig != null ? !this.methodConfig.equals(that.methodConfig) : that.methodConfig != null) return false;
                if (this.pathConfig != null ? !this.pathConfig.equals(that.pathConfig) : that.pathConfig != null) return false;
                if (this.queryStringConfig != null ? !this.queryStringConfig.equals(that.queryStringConfig) : that.queryStringConfig != null) return false;
                return this.responseHeaderConfig != null ? this.responseHeaderConfig.equals(that.responseHeaderConfig) : that.responseHeaderConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type.hashCode();
                result = 31 * result + (this.cookieConfig != null ? this.cookieConfig.hashCode() : 0);
                result = 31 * result + (this.headerConfig != null ? this.headerConfig.hashCode() : 0);
                result = 31 * result + (this.hostConfig != null ? this.hostConfig.hashCode() : 0);
                result = 31 * result + (this.methodConfig != null ? this.methodConfig.hashCode() : 0);
                result = 31 * result + (this.pathConfig != null ? this.pathConfig.hashCode() : 0);
                result = 31 * result + (this.queryStringConfig != null ? this.queryStringConfig.hashCode() : 0);
                result = 31 * result + (this.responseHeaderConfig != null ? this.responseHeaderConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty")
    @software.amazon.jsii.Jsii.Proxy(ServerGroupTuplesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServerGroupTuplesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServerGroupTuplesProperty> {
            java.lang.Object serverGroupId;

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(java.lang.String serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServerGroupTuplesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServerGroupTuplesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerGroupTuplesProperty {
            private final java.lang.Object serverGroupId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupId = software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupId = builder.serverGroupId;
            }

            @Override
            public final java.lang.Object getServerGroupId() {
                return this.serverGroupId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getServerGroupId() != null) {
                    data.set("serverGroupId", om.valueToTree(this.getServerGroupId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServerGroupTuplesProperty.Jsii$Proxy that = (ServerGroupTuplesProperty.Jsii$Proxy) o;

                return this.serverGroupId != null ? this.serverGroupId.equals(that.serverGroupId) : that.serverGroupId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupId != null ? this.serverGroupId.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRule.ValuesProperty")
    @software.amazon.jsii.Jsii.Proxy(ValuesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ValuesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ValuesProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link ValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ValuesProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ValuesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ValuesProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ValuesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ValuesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ValuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ValuesProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRule.ValuesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ValuesProperty.Jsii$Proxy that = (ValuesProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.RosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.RosRule> {
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
        private final com.aliyun.ros.cdk.alb.RosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.RosRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleActions This parameter is required.
         */
        public Builder ruleActions(final com.aliyun.ros.cdk.core.IResolvable ruleActions) {
            this.props.ruleActions(ruleActions);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleActions This parameter is required.
         */
        public Builder ruleActions(final java.util.List<? extends java.lang.Object> ruleActions) {
            this.props.ruleActions(ruleActions);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleConditions This parameter is required.
         */
        public Builder ruleConditions(final com.aliyun.ros.cdk.core.IResolvable ruleConditions) {
            this.props.ruleConditions(ruleConditions);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleConditions This parameter is required.
         */
        public Builder ruleConditions(final java.util.List<? extends java.lang.Object> ruleConditions) {
            this.props.ruleConditions(ruleConditions);
            return this;
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
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param direction This parameter is required.
         */
        public Builder direction(final java.lang.String direction) {
            this.props.direction(direction);
            return this;
        }
        /**
         * @return {@code this}
         * @param direction This parameter is required.
         */
        public Builder direction(final com.aliyun.ros.cdk.core.IResolvable direction) {
            this.props.direction(direction);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.alb.RosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.RosRule build() {
            return new com.aliyun.ros.cdk.alb.RosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
