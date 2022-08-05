package com.aliyun.ros.cdk.ram;

/**
 * A ROS template type:  `ALIYUN::RAM::Role`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.131Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole")
public class RosRole extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRole(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRole(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ram.RosRole.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::RAM::Role`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRole(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosRoleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRoleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAssumeRolePolicyDocument() {
        return software.amazon.jsii.Kernel.get(this, "assumeRolePolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAssumeRolePolicyDocument(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "assumeRolePolicyDocument", java.util.Objects.requireNonNull(value, "assumeRolePolicyDocument is required"));
    }

    /**
     */
    public void setAssumeRolePolicyDocument(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosRole.AssumeRolePolicyDocumentProperty value) {
        software.amazon.jsii.Kernel.set(this, "assumeRolePolicyDocument", java.util.Objects.requireNonNull(value, "assumeRolePolicyDocument is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRoleName() {
        return software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRoleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "roleName", java.util.Objects.requireNonNull(value, "roleName is required"));
    }

    /**
     */
    public void setRoleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "roleName", java.util.Objects.requireNonNull(value, "roleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "maxSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxSessionDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxSessionDuration", value);
    }

    /**
     */
    public void setMaxSessionDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxSessionDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicies() {
        return software.amazon.jsii.Kernel.get(this, "policies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicies(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policies", value);
    }

    /**
     */
    public void setPolicies(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "policies", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicyAttachments() {
        return software.amazon.jsii.Kernel.get(this, "policyAttachments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyAttachments(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyAttachments", value);
    }

    /**
     */
    public void setPolicyAttachments(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.RosRole.PolicyAttachmentsProperty value) {
        software.amazon.jsii.Kernel.set(this, "policyAttachments", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty")
    @software.amazon.jsii.Jsii.Proxy(AssumeRolePolicyDocumentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AssumeRolePolicyDocumentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatement();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

        /**
         * @return a {@link Builder} of {@link AssumeRolePolicyDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AssumeRolePolicyDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AssumeRolePolicyDocumentProperty> {
            java.lang.Object statement;
            java.lang.Object version;

            /**
             * Sets the value of {@link AssumeRolePolicyDocumentProperty#getStatement}
             * @param statement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statement(com.aliyun.ros.cdk.core.IResolvable statement) {
                this.statement = statement;
                return this;
            }

            /**
             * Sets the value of {@link AssumeRolePolicyDocumentProperty#getStatement}
             * @param statement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statement(java.util.List<? extends java.lang.Object> statement) {
                this.statement = statement;
                return this;
            }

            /**
             * Sets the value of {@link AssumeRolePolicyDocumentProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link AssumeRolePolicyDocumentProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AssumeRolePolicyDocumentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AssumeRolePolicyDocumentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AssumeRolePolicyDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssumeRolePolicyDocumentProperty {
            private final java.lang.Object statement;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.statement = software.amazon.jsii.Kernel.get(this, "statement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.statement = java.util.Objects.requireNonNull(builder.statement, "statement is required");
                this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            }

            @Override
            public final java.lang.Object getStatement() {
                return this.statement;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("statement", om.valueToTree(this.getStatement()));
                data.set("version", om.valueToTree(this.getVersion()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AssumeRolePolicyDocumentProperty.Jsii$Proxy that = (AssumeRolePolicyDocumentProperty.Jsii$Proxy) o;

                if (!statement.equals(that.statement)) return false;
                return this.version.equals(that.version);
            }

            @Override
            public final int hashCode() {
                int result = this.statement.hashCode();
                result = 31 * result + (this.version.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.ConditionProperty")
    @software.amazon.jsii.Jsii.Proxy(ConditionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConditionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBool() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDateEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDateGreaterThan() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDateGreaterThanEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDateLessThan() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDateLessThanEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDateNotEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNotIpAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumericEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumericGreaterThan() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumericGreaterThanEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumericLessThan() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumericLessThanEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNumericNotEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStringEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStringEqualsIgnoreCase() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStringLike() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStringNotEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStringNotEqualsIgnoreCase() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStringNotLike() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConditionProperty> {
            java.lang.Object bool;
            java.lang.Object dateEquals;
            java.lang.Object dateGreaterThan;
            java.lang.Object dateGreaterThanEquals;
            java.lang.Object dateLessThan;
            java.lang.Object dateLessThanEquals;
            java.lang.Object dateNotEquals;
            java.lang.Object ipAddress;
            java.lang.Object notIpAddress;
            java.lang.Object numericEquals;
            java.lang.Object numericGreaterThan;
            java.lang.Object numericGreaterThanEquals;
            java.lang.Object numericLessThan;
            java.lang.Object numericLessThanEquals;
            java.lang.Object numericNotEquals;
            java.lang.Object stringEquals;
            java.lang.Object stringEqualsIgnoreCase;
            java.lang.Object stringLike;
            java.lang.Object stringNotEquals;
            java.lang.Object stringNotEqualsIgnoreCase;
            java.lang.Object stringNotLike;

            /**
             * Sets the value of {@link ConditionProperty#getBool}
             * @param bool the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bool(com.aliyun.ros.cdk.core.IResolvable bool) {
                this.bool = bool;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getBool}
             * @param bool the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bool(java.util.Map<java.lang.String, ? extends java.lang.Object> bool) {
                this.bool = bool;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateEquals}
             * @param dateEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateEquals(com.aliyun.ros.cdk.core.IResolvable dateEquals) {
                this.dateEquals = dateEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateEquals}
             * @param dateEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> dateEquals) {
                this.dateEquals = dateEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateGreaterThan}
             * @param dateGreaterThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateGreaterThan(com.aliyun.ros.cdk.core.IResolvable dateGreaterThan) {
                this.dateGreaterThan = dateGreaterThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateGreaterThan}
             * @param dateGreaterThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateGreaterThan(java.util.Map<java.lang.String, ? extends java.lang.Object> dateGreaterThan) {
                this.dateGreaterThan = dateGreaterThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateGreaterThanEquals}
             * @param dateGreaterThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateGreaterThanEquals(com.aliyun.ros.cdk.core.IResolvable dateGreaterThanEquals) {
                this.dateGreaterThanEquals = dateGreaterThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateGreaterThanEquals}
             * @param dateGreaterThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateGreaterThanEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> dateGreaterThanEquals) {
                this.dateGreaterThanEquals = dateGreaterThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateLessThan}
             * @param dateLessThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateLessThan(com.aliyun.ros.cdk.core.IResolvable dateLessThan) {
                this.dateLessThan = dateLessThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateLessThan}
             * @param dateLessThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateLessThan(java.util.Map<java.lang.String, ? extends java.lang.Object> dateLessThan) {
                this.dateLessThan = dateLessThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateLessThanEquals}
             * @param dateLessThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateLessThanEquals(com.aliyun.ros.cdk.core.IResolvable dateLessThanEquals) {
                this.dateLessThanEquals = dateLessThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateLessThanEquals}
             * @param dateLessThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateLessThanEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> dateLessThanEquals) {
                this.dateLessThanEquals = dateLessThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateNotEquals}
             * @param dateNotEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateNotEquals(com.aliyun.ros.cdk.core.IResolvable dateNotEquals) {
                this.dateNotEquals = dateNotEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getDateNotEquals}
             * @param dateNotEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dateNotEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> dateNotEquals) {
                this.dateNotEquals = dateNotEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getIpAddress}
             * @param ipAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipAddress(com.aliyun.ros.cdk.core.IResolvable ipAddress) {
                this.ipAddress = ipAddress;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getIpAddress}
             * @param ipAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipAddress(java.util.Map<java.lang.String, ? extends java.lang.Object> ipAddress) {
                this.ipAddress = ipAddress;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNotIpAddress}
             * @param notIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notIpAddress(com.aliyun.ros.cdk.core.IResolvable notIpAddress) {
                this.notIpAddress = notIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNotIpAddress}
             * @param notIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notIpAddress(java.util.Map<java.lang.String, ? extends java.lang.Object> notIpAddress) {
                this.notIpAddress = notIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericEquals}
             * @param numericEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericEquals(com.aliyun.ros.cdk.core.IResolvable numericEquals) {
                this.numericEquals = numericEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericEquals}
             * @param numericEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> numericEquals) {
                this.numericEquals = numericEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericGreaterThan}
             * @param numericGreaterThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericGreaterThan(com.aliyun.ros.cdk.core.IResolvable numericGreaterThan) {
                this.numericGreaterThan = numericGreaterThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericGreaterThan}
             * @param numericGreaterThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericGreaterThan(java.util.Map<java.lang.String, ? extends java.lang.Object> numericGreaterThan) {
                this.numericGreaterThan = numericGreaterThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericGreaterThanEquals}
             * @param numericGreaterThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericGreaterThanEquals(com.aliyun.ros.cdk.core.IResolvable numericGreaterThanEquals) {
                this.numericGreaterThanEquals = numericGreaterThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericGreaterThanEquals}
             * @param numericGreaterThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericGreaterThanEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> numericGreaterThanEquals) {
                this.numericGreaterThanEquals = numericGreaterThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericLessThan}
             * @param numericLessThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericLessThan(com.aliyun.ros.cdk.core.IResolvable numericLessThan) {
                this.numericLessThan = numericLessThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericLessThan}
             * @param numericLessThan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericLessThan(java.util.Map<java.lang.String, ? extends java.lang.Object> numericLessThan) {
                this.numericLessThan = numericLessThan;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericLessThanEquals}
             * @param numericLessThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericLessThanEquals(com.aliyun.ros.cdk.core.IResolvable numericLessThanEquals) {
                this.numericLessThanEquals = numericLessThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericLessThanEquals}
             * @param numericLessThanEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericLessThanEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> numericLessThanEquals) {
                this.numericLessThanEquals = numericLessThanEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericNotEquals}
             * @param numericNotEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericNotEquals(com.aliyun.ros.cdk.core.IResolvable numericNotEquals) {
                this.numericNotEquals = numericNotEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getNumericNotEquals}
             * @param numericNotEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder numericNotEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> numericNotEquals) {
                this.numericNotEquals = numericNotEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringEquals}
             * @param stringEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringEquals(com.aliyun.ros.cdk.core.IResolvable stringEquals) {
                this.stringEquals = stringEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringEquals}
             * @param stringEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> stringEquals) {
                this.stringEquals = stringEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringEqualsIgnoreCase}
             * @param stringEqualsIgnoreCase the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringEqualsIgnoreCase(com.aliyun.ros.cdk.core.IResolvable stringEqualsIgnoreCase) {
                this.stringEqualsIgnoreCase = stringEqualsIgnoreCase;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringEqualsIgnoreCase}
             * @param stringEqualsIgnoreCase the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringEqualsIgnoreCase(java.util.Map<java.lang.String, ? extends java.lang.Object> stringEqualsIgnoreCase) {
                this.stringEqualsIgnoreCase = stringEqualsIgnoreCase;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringLike}
             * @param stringLike the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringLike(com.aliyun.ros.cdk.core.IResolvable stringLike) {
                this.stringLike = stringLike;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringLike}
             * @param stringLike the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringLike(java.util.Map<java.lang.String, ? extends java.lang.Object> stringLike) {
                this.stringLike = stringLike;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringNotEquals}
             * @param stringNotEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringNotEquals(com.aliyun.ros.cdk.core.IResolvable stringNotEquals) {
                this.stringNotEquals = stringNotEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringNotEquals}
             * @param stringNotEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringNotEquals(java.util.Map<java.lang.String, ? extends java.lang.Object> stringNotEquals) {
                this.stringNotEquals = stringNotEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringNotEqualsIgnoreCase}
             * @param stringNotEqualsIgnoreCase the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringNotEqualsIgnoreCase(com.aliyun.ros.cdk.core.IResolvable stringNotEqualsIgnoreCase) {
                this.stringNotEqualsIgnoreCase = stringNotEqualsIgnoreCase;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringNotEqualsIgnoreCase}
             * @param stringNotEqualsIgnoreCase the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringNotEqualsIgnoreCase(java.util.Map<java.lang.String, ? extends java.lang.Object> stringNotEqualsIgnoreCase) {
                this.stringNotEqualsIgnoreCase = stringNotEqualsIgnoreCase;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringNotLike}
             * @param stringNotLike the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringNotLike(com.aliyun.ros.cdk.core.IResolvable stringNotLike) {
                this.stringNotLike = stringNotLike;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getStringNotLike}
             * @param stringNotLike the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stringNotLike(java.util.Map<java.lang.String, ? extends java.lang.Object> stringNotLike) {
                this.stringNotLike = stringNotLike;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConditionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConditionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConditionProperty {
            private final java.lang.Object bool;
            private final java.lang.Object dateEquals;
            private final java.lang.Object dateGreaterThan;
            private final java.lang.Object dateGreaterThanEquals;
            private final java.lang.Object dateLessThan;
            private final java.lang.Object dateLessThanEquals;
            private final java.lang.Object dateNotEquals;
            private final java.lang.Object ipAddress;
            private final java.lang.Object notIpAddress;
            private final java.lang.Object numericEquals;
            private final java.lang.Object numericGreaterThan;
            private final java.lang.Object numericGreaterThanEquals;
            private final java.lang.Object numericLessThan;
            private final java.lang.Object numericLessThanEquals;
            private final java.lang.Object numericNotEquals;
            private final java.lang.Object stringEquals;
            private final java.lang.Object stringEqualsIgnoreCase;
            private final java.lang.Object stringLike;
            private final java.lang.Object stringNotEquals;
            private final java.lang.Object stringNotEqualsIgnoreCase;
            private final java.lang.Object stringNotLike;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bool = software.amazon.jsii.Kernel.get(this, "bool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dateEquals = software.amazon.jsii.Kernel.get(this, "dateEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dateGreaterThan = software.amazon.jsii.Kernel.get(this, "dateGreaterThan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dateGreaterThanEquals = software.amazon.jsii.Kernel.get(this, "dateGreaterThanEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dateLessThan = software.amazon.jsii.Kernel.get(this, "dateLessThan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dateLessThanEquals = software.amazon.jsii.Kernel.get(this, "dateLessThanEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dateNotEquals = software.amazon.jsii.Kernel.get(this, "dateNotEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipAddress = software.amazon.jsii.Kernel.get(this, "ipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notIpAddress = software.amazon.jsii.Kernel.get(this, "notIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numericEquals = software.amazon.jsii.Kernel.get(this, "numericEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numericGreaterThan = software.amazon.jsii.Kernel.get(this, "numericGreaterThan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numericGreaterThanEquals = software.amazon.jsii.Kernel.get(this, "numericGreaterThanEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numericLessThan = software.amazon.jsii.Kernel.get(this, "numericLessThan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numericLessThanEquals = software.amazon.jsii.Kernel.get(this, "numericLessThanEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.numericNotEquals = software.amazon.jsii.Kernel.get(this, "numericNotEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stringEquals = software.amazon.jsii.Kernel.get(this, "stringEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stringEqualsIgnoreCase = software.amazon.jsii.Kernel.get(this, "stringEqualsIgnoreCase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stringLike = software.amazon.jsii.Kernel.get(this, "stringLike", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stringNotEquals = software.amazon.jsii.Kernel.get(this, "stringNotEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stringNotEqualsIgnoreCase = software.amazon.jsii.Kernel.get(this, "stringNotEqualsIgnoreCase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stringNotLike = software.amazon.jsii.Kernel.get(this, "stringNotLike", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bool = builder.bool;
                this.dateEquals = builder.dateEquals;
                this.dateGreaterThan = builder.dateGreaterThan;
                this.dateGreaterThanEquals = builder.dateGreaterThanEquals;
                this.dateLessThan = builder.dateLessThan;
                this.dateLessThanEquals = builder.dateLessThanEquals;
                this.dateNotEquals = builder.dateNotEquals;
                this.ipAddress = builder.ipAddress;
                this.notIpAddress = builder.notIpAddress;
                this.numericEquals = builder.numericEquals;
                this.numericGreaterThan = builder.numericGreaterThan;
                this.numericGreaterThanEquals = builder.numericGreaterThanEquals;
                this.numericLessThan = builder.numericLessThan;
                this.numericLessThanEquals = builder.numericLessThanEquals;
                this.numericNotEquals = builder.numericNotEquals;
                this.stringEquals = builder.stringEquals;
                this.stringEqualsIgnoreCase = builder.stringEqualsIgnoreCase;
                this.stringLike = builder.stringLike;
                this.stringNotEquals = builder.stringNotEquals;
                this.stringNotEqualsIgnoreCase = builder.stringNotEqualsIgnoreCase;
                this.stringNotLike = builder.stringNotLike;
            }

            @Override
            public final java.lang.Object getBool() {
                return this.bool;
            }

            @Override
            public final java.lang.Object getDateEquals() {
                return this.dateEquals;
            }

            @Override
            public final java.lang.Object getDateGreaterThan() {
                return this.dateGreaterThan;
            }

            @Override
            public final java.lang.Object getDateGreaterThanEquals() {
                return this.dateGreaterThanEquals;
            }

            @Override
            public final java.lang.Object getDateLessThan() {
                return this.dateLessThan;
            }

            @Override
            public final java.lang.Object getDateLessThanEquals() {
                return this.dateLessThanEquals;
            }

            @Override
            public final java.lang.Object getDateNotEquals() {
                return this.dateNotEquals;
            }

            @Override
            public final java.lang.Object getIpAddress() {
                return this.ipAddress;
            }

            @Override
            public final java.lang.Object getNotIpAddress() {
                return this.notIpAddress;
            }

            @Override
            public final java.lang.Object getNumericEquals() {
                return this.numericEquals;
            }

            @Override
            public final java.lang.Object getNumericGreaterThan() {
                return this.numericGreaterThan;
            }

            @Override
            public final java.lang.Object getNumericGreaterThanEquals() {
                return this.numericGreaterThanEquals;
            }

            @Override
            public final java.lang.Object getNumericLessThan() {
                return this.numericLessThan;
            }

            @Override
            public final java.lang.Object getNumericLessThanEquals() {
                return this.numericLessThanEquals;
            }

            @Override
            public final java.lang.Object getNumericNotEquals() {
                return this.numericNotEquals;
            }

            @Override
            public final java.lang.Object getStringEquals() {
                return this.stringEquals;
            }

            @Override
            public final java.lang.Object getStringEqualsIgnoreCase() {
                return this.stringEqualsIgnoreCase;
            }

            @Override
            public final java.lang.Object getStringLike() {
                return this.stringLike;
            }

            @Override
            public final java.lang.Object getStringNotEquals() {
                return this.stringNotEquals;
            }

            @Override
            public final java.lang.Object getStringNotEqualsIgnoreCase() {
                return this.stringNotEqualsIgnoreCase;
            }

            @Override
            public final java.lang.Object getStringNotLike() {
                return this.stringNotLike;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBool() != null) {
                    data.set("bool", om.valueToTree(this.getBool()));
                }
                if (this.getDateEquals() != null) {
                    data.set("dateEquals", om.valueToTree(this.getDateEquals()));
                }
                if (this.getDateGreaterThan() != null) {
                    data.set("dateGreaterThan", om.valueToTree(this.getDateGreaterThan()));
                }
                if (this.getDateGreaterThanEquals() != null) {
                    data.set("dateGreaterThanEquals", om.valueToTree(this.getDateGreaterThanEquals()));
                }
                if (this.getDateLessThan() != null) {
                    data.set("dateLessThan", om.valueToTree(this.getDateLessThan()));
                }
                if (this.getDateLessThanEquals() != null) {
                    data.set("dateLessThanEquals", om.valueToTree(this.getDateLessThanEquals()));
                }
                if (this.getDateNotEquals() != null) {
                    data.set("dateNotEquals", om.valueToTree(this.getDateNotEquals()));
                }
                if (this.getIpAddress() != null) {
                    data.set("ipAddress", om.valueToTree(this.getIpAddress()));
                }
                if (this.getNotIpAddress() != null) {
                    data.set("notIpAddress", om.valueToTree(this.getNotIpAddress()));
                }
                if (this.getNumericEquals() != null) {
                    data.set("numericEquals", om.valueToTree(this.getNumericEquals()));
                }
                if (this.getNumericGreaterThan() != null) {
                    data.set("numericGreaterThan", om.valueToTree(this.getNumericGreaterThan()));
                }
                if (this.getNumericGreaterThanEquals() != null) {
                    data.set("numericGreaterThanEquals", om.valueToTree(this.getNumericGreaterThanEquals()));
                }
                if (this.getNumericLessThan() != null) {
                    data.set("numericLessThan", om.valueToTree(this.getNumericLessThan()));
                }
                if (this.getNumericLessThanEquals() != null) {
                    data.set("numericLessThanEquals", om.valueToTree(this.getNumericLessThanEquals()));
                }
                if (this.getNumericNotEquals() != null) {
                    data.set("numericNotEquals", om.valueToTree(this.getNumericNotEquals()));
                }
                if (this.getStringEquals() != null) {
                    data.set("stringEquals", om.valueToTree(this.getStringEquals()));
                }
                if (this.getStringEqualsIgnoreCase() != null) {
                    data.set("stringEqualsIgnoreCase", om.valueToTree(this.getStringEqualsIgnoreCase()));
                }
                if (this.getStringLike() != null) {
                    data.set("stringLike", om.valueToTree(this.getStringLike()));
                }
                if (this.getStringNotEquals() != null) {
                    data.set("stringNotEquals", om.valueToTree(this.getStringNotEquals()));
                }
                if (this.getStringNotEqualsIgnoreCase() != null) {
                    data.set("stringNotEqualsIgnoreCase", om.valueToTree(this.getStringNotEqualsIgnoreCase()));
                }
                if (this.getStringNotLike() != null) {
                    data.set("stringNotLike", om.valueToTree(this.getStringNotLike()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.ConditionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConditionProperty.Jsii$Proxy that = (ConditionProperty.Jsii$Proxy) o;

                if (this.bool != null ? !this.bool.equals(that.bool) : that.bool != null) return false;
                if (this.dateEquals != null ? !this.dateEquals.equals(that.dateEquals) : that.dateEquals != null) return false;
                if (this.dateGreaterThan != null ? !this.dateGreaterThan.equals(that.dateGreaterThan) : that.dateGreaterThan != null) return false;
                if (this.dateGreaterThanEquals != null ? !this.dateGreaterThanEquals.equals(that.dateGreaterThanEquals) : that.dateGreaterThanEquals != null) return false;
                if (this.dateLessThan != null ? !this.dateLessThan.equals(that.dateLessThan) : that.dateLessThan != null) return false;
                if (this.dateLessThanEquals != null ? !this.dateLessThanEquals.equals(that.dateLessThanEquals) : that.dateLessThanEquals != null) return false;
                if (this.dateNotEquals != null ? !this.dateNotEquals.equals(that.dateNotEquals) : that.dateNotEquals != null) return false;
                if (this.ipAddress != null ? !this.ipAddress.equals(that.ipAddress) : that.ipAddress != null) return false;
                if (this.notIpAddress != null ? !this.notIpAddress.equals(that.notIpAddress) : that.notIpAddress != null) return false;
                if (this.numericEquals != null ? !this.numericEquals.equals(that.numericEquals) : that.numericEquals != null) return false;
                if (this.numericGreaterThan != null ? !this.numericGreaterThan.equals(that.numericGreaterThan) : that.numericGreaterThan != null) return false;
                if (this.numericGreaterThanEquals != null ? !this.numericGreaterThanEquals.equals(that.numericGreaterThanEquals) : that.numericGreaterThanEquals != null) return false;
                if (this.numericLessThan != null ? !this.numericLessThan.equals(that.numericLessThan) : that.numericLessThan != null) return false;
                if (this.numericLessThanEquals != null ? !this.numericLessThanEquals.equals(that.numericLessThanEquals) : that.numericLessThanEquals != null) return false;
                if (this.numericNotEquals != null ? !this.numericNotEquals.equals(that.numericNotEquals) : that.numericNotEquals != null) return false;
                if (this.stringEquals != null ? !this.stringEquals.equals(that.stringEquals) : that.stringEquals != null) return false;
                if (this.stringEqualsIgnoreCase != null ? !this.stringEqualsIgnoreCase.equals(that.stringEqualsIgnoreCase) : that.stringEqualsIgnoreCase != null) return false;
                if (this.stringLike != null ? !this.stringLike.equals(that.stringLike) : that.stringLike != null) return false;
                if (this.stringNotEquals != null ? !this.stringNotEquals.equals(that.stringNotEquals) : that.stringNotEquals != null) return false;
                if (this.stringNotEqualsIgnoreCase != null ? !this.stringNotEqualsIgnoreCase.equals(that.stringNotEqualsIgnoreCase) : that.stringNotEqualsIgnoreCase != null) return false;
                return this.stringNotLike != null ? this.stringNotLike.equals(that.stringNotLike) : that.stringNotLike == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bool != null ? this.bool.hashCode() : 0;
                result = 31 * result + (this.dateEquals != null ? this.dateEquals.hashCode() : 0);
                result = 31 * result + (this.dateGreaterThan != null ? this.dateGreaterThan.hashCode() : 0);
                result = 31 * result + (this.dateGreaterThanEquals != null ? this.dateGreaterThanEquals.hashCode() : 0);
                result = 31 * result + (this.dateLessThan != null ? this.dateLessThan.hashCode() : 0);
                result = 31 * result + (this.dateLessThanEquals != null ? this.dateLessThanEquals.hashCode() : 0);
                result = 31 * result + (this.dateNotEquals != null ? this.dateNotEquals.hashCode() : 0);
                result = 31 * result + (this.ipAddress != null ? this.ipAddress.hashCode() : 0);
                result = 31 * result + (this.notIpAddress != null ? this.notIpAddress.hashCode() : 0);
                result = 31 * result + (this.numericEquals != null ? this.numericEquals.hashCode() : 0);
                result = 31 * result + (this.numericGreaterThan != null ? this.numericGreaterThan.hashCode() : 0);
                result = 31 * result + (this.numericGreaterThanEquals != null ? this.numericGreaterThanEquals.hashCode() : 0);
                result = 31 * result + (this.numericLessThan != null ? this.numericLessThan.hashCode() : 0);
                result = 31 * result + (this.numericLessThanEquals != null ? this.numericLessThanEquals.hashCode() : 0);
                result = 31 * result + (this.numericNotEquals != null ? this.numericNotEquals.hashCode() : 0);
                result = 31 * result + (this.stringEquals != null ? this.stringEquals.hashCode() : 0);
                result = 31 * result + (this.stringEqualsIgnoreCase != null ? this.stringEqualsIgnoreCase.hashCode() : 0);
                result = 31 * result + (this.stringLike != null ? this.stringLike.hashCode() : 0);
                result = 31 * result + (this.stringNotEquals != null ? this.stringNotEquals.hashCode() : 0);
                result = 31 * result + (this.stringNotEqualsIgnoreCase != null ? this.stringNotEqualsIgnoreCase.hashCode() : 0);
                result = 31 * result + (this.stringNotLike != null ? this.stringNotLike.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.PoliciesProperty")
    @software.amazon.jsii.Jsii.Proxy(PoliciesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PoliciesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPolicyDocument();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PoliciesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PoliciesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PoliciesProperty> {
            java.lang.Object policyDocument;
            java.lang.Object policyName;
            java.lang.Object description;

            /**
             * Sets the value of {@link PoliciesProperty#getPolicyDocument}
             * @param policyDocument the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyDocument(com.aliyun.ros.cdk.core.IResolvable policyDocument) {
                this.policyDocument = policyDocument;
                return this;
            }

            /**
             * Sets the value of {@link PoliciesProperty#getPolicyDocument}
             * @param policyDocument the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyDocument(com.aliyun.ros.cdk.ram.RosRole.PolicyDocumentProperty policyDocument) {
                this.policyDocument = policyDocument;
                return this;
            }

            /**
             * Sets the value of {@link PoliciesProperty#getPolicyName}
             * @param policyName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyName(java.lang.String policyName) {
                this.policyName = policyName;
                return this;
            }

            /**
             * Sets the value of {@link PoliciesProperty#getPolicyName}
             * @param policyName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
                this.policyName = policyName;
                return this;
            }

            /**
             * Sets the value of {@link PoliciesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link PoliciesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PoliciesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PoliciesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PoliciesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PoliciesProperty {
            private final java.lang.Object policyDocument;
            private final java.lang.Object policyName;
            private final java.lang.Object description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.policyDocument = software.amazon.jsii.Kernel.get(this, "policyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.policyDocument = java.util.Objects.requireNonNull(builder.policyDocument, "policyDocument is required");
                this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
                this.description = builder.description;
            }

            @Override
            public final java.lang.Object getPolicyDocument() {
                return this.policyDocument;
            }

            @Override
            public final java.lang.Object getPolicyName() {
                return this.policyName;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("policyDocument", om.valueToTree(this.getPolicyDocument()));
                data.set("policyName", om.valueToTree(this.getPolicyName()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.PoliciesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PoliciesProperty.Jsii$Proxy that = (PoliciesProperty.Jsii$Proxy) o;

                if (!policyDocument.equals(that.policyDocument)) return false;
                if (!policyName.equals(that.policyName)) return false;
                return this.description != null ? this.description.equals(that.description) : that.description == null;
            }

            @Override
            public final int hashCode() {
                int result = this.policyDocument.hashCode();
                result = 31 * result + (this.policyName.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty")
    @software.amazon.jsii.Jsii.Proxy(PolicyAttachmentsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PolicyAttachmentsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustom() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystem() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PolicyAttachmentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PolicyAttachmentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PolicyAttachmentsProperty> {
            java.lang.Object custom;
            java.lang.Object system;

            /**
             * Sets the value of {@link PolicyAttachmentsProperty#getCustom}
             * @param custom the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder custom(com.aliyun.ros.cdk.core.IResolvable custom) {
                this.custom = custom;
                return this;
            }

            /**
             * Sets the value of {@link PolicyAttachmentsProperty#getCustom}
             * @param custom the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder custom(java.util.List<? extends java.lang.Object> custom) {
                this.custom = custom;
                return this;
            }

            /**
             * Sets the value of {@link PolicyAttachmentsProperty#getSystem}
             * @param system the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder system(com.aliyun.ros.cdk.core.IResolvable system) {
                this.system = system;
                return this;
            }

            /**
             * Sets the value of {@link PolicyAttachmentsProperty#getSystem}
             * @param system the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder system(java.util.List<? extends java.lang.Object> system) {
                this.system = system;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PolicyAttachmentsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PolicyAttachmentsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PolicyAttachmentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyAttachmentsProperty {
            private final java.lang.Object custom;
            private final java.lang.Object system;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.custom = software.amazon.jsii.Kernel.get(this, "custom", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.system = software.amazon.jsii.Kernel.get(this, "system", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.custom = builder.custom;
                this.system = builder.system;
            }

            @Override
            public final java.lang.Object getCustom() {
                return this.custom;
            }

            @Override
            public final java.lang.Object getSystem() {
                return this.system;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCustom() != null) {
                    data.set("custom", om.valueToTree(this.getCustom()));
                }
                if (this.getSystem() != null) {
                    data.set("system", om.valueToTree(this.getSystem()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PolicyAttachmentsProperty.Jsii$Proxy that = (PolicyAttachmentsProperty.Jsii$Proxy) o;

                if (this.custom != null ? !this.custom.equals(that.custom) : that.custom != null) return false;
                return this.system != null ? this.system.equals(that.system) : that.system == null;
            }

            @Override
            public final int hashCode() {
                int result = this.custom != null ? this.custom.hashCode() : 0;
                result = 31 * result + (this.system != null ? this.system.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty")
    @software.amazon.jsii.Jsii.Proxy(PolicyDocumentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PolicyDocumentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatement();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

        /**
         * @return a {@link Builder} of {@link PolicyDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PolicyDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PolicyDocumentProperty> {
            java.lang.Object statement;
            java.lang.Object version;

            /**
             * Sets the value of {@link PolicyDocumentProperty#getStatement}
             * @param statement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statement(com.aliyun.ros.cdk.core.IResolvable statement) {
                this.statement = statement;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentProperty#getStatement}
             * @param statement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statement(java.util.List<? extends java.lang.Object> statement) {
                this.statement = statement;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentProperty#getVersion}
             * @param version the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PolicyDocumentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PolicyDocumentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PolicyDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyDocumentProperty {
            private final java.lang.Object statement;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.statement = software.amazon.jsii.Kernel.get(this, "statement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.statement = java.util.Objects.requireNonNull(builder.statement, "statement is required");
                this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            }

            @Override
            public final java.lang.Object getStatement() {
                return this.statement;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("statement", om.valueToTree(this.getStatement()));
                data.set("version", om.valueToTree(this.getVersion()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PolicyDocumentProperty.Jsii$Proxy that = (PolicyDocumentProperty.Jsii$Proxy) o;

                if (!statement.equals(that.statement)) return false;
                return this.version.equals(that.version);
            }

            @Override
            public final int hashCode() {
                int result = this.statement.hashCode();
                result = 31 * result + (this.version.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty")
    @software.amazon.jsii.Jsii.Proxy(PolicyDocumentStatementProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PolicyDocumentStatementProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCondition() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEffect() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResource() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PolicyDocumentStatementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PolicyDocumentStatementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PolicyDocumentStatementProperty> {
            java.lang.Object action;
            java.lang.Object condition;
            java.lang.Object effect;
            java.lang.Object resource;

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.util.List<? extends java.lang.Object> action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(java.util.Map<java.lang.String, ? extends java.lang.Object> condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(java.lang.String effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(com.aliyun.ros.cdk.core.IResolvable effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getResource}
             * @param resource the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resource(java.util.List<? extends java.lang.Object> resource) {
                this.resource = resource;
                return this;
            }

            /**
             * Sets the value of {@link PolicyDocumentStatementProperty#getResource}
             * @param resource the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resource(com.aliyun.ros.cdk.core.IResolvable resource) {
                this.resource = resource;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PolicyDocumentStatementProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PolicyDocumentStatementProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PolicyDocumentStatementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyDocumentStatementProperty {
            private final java.lang.Object action;
            private final java.lang.Object condition;
            private final java.lang.Object effect;
            private final java.lang.Object resource;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.effect = software.amazon.jsii.Kernel.get(this, "effect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resource = software.amazon.jsii.Kernel.get(this, "resource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = builder.action;
                this.condition = builder.condition;
                this.effect = builder.effect;
                this.resource = builder.resource;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
            }

            @Override
            public final java.lang.Object getEffect() {
                return this.effect;
            }

            @Override
            public final java.lang.Object getResource() {
                return this.resource;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAction() != null) {
                    data.set("action", om.valueToTree(this.getAction()));
                }
                if (this.getCondition() != null) {
                    data.set("condition", om.valueToTree(this.getCondition()));
                }
                if (this.getEffect() != null) {
                    data.set("effect", om.valueToTree(this.getEffect()));
                }
                if (this.getResource() != null) {
                    data.set("resource", om.valueToTree(this.getResource()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PolicyDocumentStatementProperty.Jsii$Proxy that = (PolicyDocumentStatementProperty.Jsii$Proxy) o;

                if (this.action != null ? !this.action.equals(that.action) : that.action != null) return false;
                if (this.condition != null ? !this.condition.equals(that.condition) : that.condition != null) return false;
                if (this.effect != null ? !this.effect.equals(that.effect) : that.effect != null) return false;
                return this.resource != null ? this.resource.equals(that.resource) : that.resource == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action != null ? this.action.hashCode() : 0;
                result = 31 * result + (this.condition != null ? this.condition.hashCode() : 0);
                result = 31 * result + (this.effect != null ? this.effect.hashCode() : 0);
                result = 31 * result + (this.resource != null ? this.resource.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.PrincipalProperty")
    @software.amazon.jsii.Jsii.Proxy(PrincipalProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrincipalProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFederated() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRam() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getService() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrincipalProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrincipalProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrincipalProperty> {
            java.lang.Object federated;
            java.lang.Object ram;
            java.lang.Object service;

            /**
             * Sets the value of {@link PrincipalProperty#getFederated}
             * @param federated the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder federated(java.util.List<? extends java.lang.Object> federated) {
                this.federated = federated;
                return this;
            }

            /**
             * Sets the value of {@link PrincipalProperty#getFederated}
             * @param federated the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder federated(com.aliyun.ros.cdk.core.IResolvable federated) {
                this.federated = federated;
                return this;
            }

            /**
             * Sets the value of {@link PrincipalProperty#getRam}
             * @param ram the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ram(java.util.List<? extends java.lang.Object> ram) {
                this.ram = ram;
                return this;
            }

            /**
             * Sets the value of {@link PrincipalProperty#getRam}
             * @param ram the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ram(com.aliyun.ros.cdk.core.IResolvable ram) {
                this.ram = ram;
                return this;
            }

            /**
             * Sets the value of {@link PrincipalProperty#getService}
             * @param service the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder service(java.util.List<? extends java.lang.Object> service) {
                this.service = service;
                return this;
            }

            /**
             * Sets the value of {@link PrincipalProperty#getService}
             * @param service the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder service(com.aliyun.ros.cdk.core.IResolvable service) {
                this.service = service;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrincipalProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrincipalProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrincipalProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrincipalProperty {
            private final java.lang.Object federated;
            private final java.lang.Object ram;
            private final java.lang.Object service;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.federated = software.amazon.jsii.Kernel.get(this, "federated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ram = software.amazon.jsii.Kernel.get(this, "ram", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.service = software.amazon.jsii.Kernel.get(this, "service", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.federated = builder.federated;
                this.ram = builder.ram;
                this.service = builder.service;
            }

            @Override
            public final java.lang.Object getFederated() {
                return this.federated;
            }

            @Override
            public final java.lang.Object getRam() {
                return this.ram;
            }

            @Override
            public final java.lang.Object getService() {
                return this.service;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFederated() != null) {
                    data.set("federated", om.valueToTree(this.getFederated()));
                }
                if (this.getRam() != null) {
                    data.set("ram", om.valueToTree(this.getRam()));
                }
                if (this.getService() != null) {
                    data.set("service", om.valueToTree(this.getService()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.PrincipalProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrincipalProperty.Jsii$Proxy that = (PrincipalProperty.Jsii$Proxy) o;

                if (this.federated != null ? !this.federated.equals(that.federated) : that.federated != null) return false;
                if (this.ram != null ? !this.ram.equals(that.ram) : that.ram != null) return false;
                return this.service != null ? this.service.equals(that.service) : that.service == null;
            }

            @Override
            public final int hashCode() {
                int result = this.federated != null ? this.federated.hashCode() : 0;
                result = 31 * result + (this.ram != null ? this.ram.hashCode() : 0);
                result = 31 * result + (this.service != null ? this.service.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosRole.StatementProperty")
    @software.amazon.jsii.Jsii.Proxy(StatementProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface StatementProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCondition() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEffect() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrincipal() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link StatementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link StatementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<StatementProperty> {
            java.lang.Object action;
            java.lang.Object condition;
            java.lang.Object effect;
            java.lang.Object principal;

            /**
             * Sets the value of {@link StatementProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.ram.RosRole.ConditionProperty condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(java.lang.String effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(com.aliyun.ros.cdk.core.IResolvable effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getPrincipal}
             * @param principal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder principal(com.aliyun.ros.cdk.core.IResolvable principal) {
                this.principal = principal;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getPrincipal}
             * @param principal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder principal(com.aliyun.ros.cdk.ram.RosRole.PrincipalProperty principal) {
                this.principal = principal;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link StatementProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public StatementProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link StatementProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StatementProperty {
            private final java.lang.Object action;
            private final java.lang.Object condition;
            private final java.lang.Object effect;
            private final java.lang.Object principal;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.effect = software.amazon.jsii.Kernel.get(this, "effect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.principal = software.amazon.jsii.Kernel.get(this, "principal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.action = builder.action;
                this.condition = builder.condition;
                this.effect = builder.effect;
                this.principal = builder.principal;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
            }

            @Override
            public final java.lang.Object getEffect() {
                return this.effect;
            }

            @Override
            public final java.lang.Object getPrincipal() {
                return this.principal;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAction() != null) {
                    data.set("action", om.valueToTree(this.getAction()));
                }
                if (this.getCondition() != null) {
                    data.set("condition", om.valueToTree(this.getCondition()));
                }
                if (this.getEffect() != null) {
                    data.set("effect", om.valueToTree(this.getEffect()));
                }
                if (this.getPrincipal() != null) {
                    data.set("principal", om.valueToTree(this.getPrincipal()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosRole.StatementProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                StatementProperty.Jsii$Proxy that = (StatementProperty.Jsii$Proxy) o;

                if (this.action != null ? !this.action.equals(that.action) : that.action != null) return false;
                if (this.condition != null ? !this.condition.equals(that.condition) : that.condition != null) return false;
                if (this.effect != null ? !this.effect.equals(that.effect) : that.effect != null) return false;
                return this.principal != null ? this.principal.equals(that.principal) : that.principal == null;
            }

            @Override
            public final int hashCode() {
                int result = this.action != null ? this.action.hashCode() : 0;
                result = 31 * result + (this.condition != null ? this.condition.hashCode() : 0);
                result = 31 * result + (this.effect != null ? this.effect.hashCode() : 0);
                result = 31 * result + (this.principal != null ? this.principal.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.RosRole}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.RosRole> {
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
        private final com.aliyun.ros.cdk.ram.RosRoleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RosRoleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param assumeRolePolicyDocument This parameter is required.
         */
        public Builder assumeRolePolicyDocument(final com.aliyun.ros.cdk.core.IResolvable assumeRolePolicyDocument) {
            this.props.assumeRolePolicyDocument(assumeRolePolicyDocument);
            return this;
        }
        /**
         * @return {@code this}
         * @param assumeRolePolicyDocument This parameter is required.
         */
        public Builder assumeRolePolicyDocument(final com.aliyun.ros.cdk.ram.RosRole.AssumeRolePolicyDocumentProperty assumeRolePolicyDocument) {
            this.props.assumeRolePolicyDocument(assumeRolePolicyDocument);
            return this;
        }

        /**
         * @return {@code this}
         * @param roleName This parameter is required.
         */
        public Builder roleName(final java.lang.String roleName) {
            this.props.roleName(roleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param roleName This parameter is required.
         */
        public Builder roleName(final com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.props.roleName(roleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxSessionDuration This parameter is required.
         */
        public Builder maxSessionDuration(final java.lang.Number maxSessionDuration) {
            this.props.maxSessionDuration(maxSessionDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxSessionDuration This parameter is required.
         */
        public Builder maxSessionDuration(final com.aliyun.ros.cdk.core.IResolvable maxSessionDuration) {
            this.props.maxSessionDuration(maxSessionDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param policies This parameter is required.
         */
        public Builder policies(final com.aliyun.ros.cdk.core.IResolvable policies) {
            this.props.policies(policies);
            return this;
        }
        /**
         * @return {@code this}
         * @param policies This parameter is required.
         */
        public Builder policies(final java.util.List<? extends java.lang.Object> policies) {
            this.props.policies(policies);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyAttachments This parameter is required.
         */
        public Builder policyAttachments(final com.aliyun.ros.cdk.core.IResolvable policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyAttachments This parameter is required.
         */
        public Builder policyAttachments(final com.aliyun.ros.cdk.ram.RosRole.PolicyAttachmentsProperty policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ram.RosRole}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.RosRole build() {
            return new com.aliyun.ros.cdk.ram.RosRole(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
