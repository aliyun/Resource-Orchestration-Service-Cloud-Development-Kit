package com.aliyun.ros.cdk.ram;

/**
 * A ROS template type:  <code>ALIYUN::RAM::Group</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:47.126Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosGroup")
public class RosGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ram.RosGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::RAM::Group</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupName() {
        return software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComments() {
        return software.amazon.jsii.Kernel.get(this, "comments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComments(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "comments", value);
    }

    /**
     */
    public void setComments(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "comments", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
        return software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIgnoreExisting(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "ignoreExisting", value);
    }

    /**
     */
    public void setIgnoreExisting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ignoreExisting", value);
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ram.RosGroup.PoliciesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ram.RosGroup.PoliciesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
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
    public void setPolicyAttachments(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.RosGroup.PolicyAttachmentsProperty value) {
        software.amazon.jsii.Kernel.set(this, "policyAttachments", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty")
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
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
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
            java.lang.Object ignoreExisting;

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
            public Builder policyDocument(com.aliyun.ros.cdk.ram.RosGroup.PolicyDocumentProperty policyDocument) {
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
             * Sets the value of {@link PoliciesProperty#getIgnoreExisting}
             * @param ignoreExisting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ignoreExisting(java.lang.Boolean ignoreExisting) {
                this.ignoreExisting = ignoreExisting;
                return this;
            }

            /**
             * Sets the value of {@link PoliciesProperty#getIgnoreExisting}
             * @param ignoreExisting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ignoreExisting(com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
                this.ignoreExisting = ignoreExisting;
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
            private final java.lang.Object ignoreExisting;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.policyDocument = software.amazon.jsii.Kernel.get(this, "policyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ignoreExisting = software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.policyDocument = java.util.Objects.requireNonNull(builder.policyDocument, "policyDocument is required");
                this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
                this.description = builder.description;
                this.ignoreExisting = builder.ignoreExisting;
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
            public final java.lang.Object getIgnoreExisting() {
                return this.ignoreExisting;
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
                if (this.getIgnoreExisting() != null) {
                    data.set("ignoreExisting", om.valueToTree(this.getIgnoreExisting()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty"));
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
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                return this.ignoreExisting != null ? this.ignoreExisting.equals(that.ignoreExisting) : that.ignoreExisting == null;
            }

            @Override
            public final int hashCode() {
                int result = this.policyDocument.hashCode();
                result = 31 * result + (this.policyName.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.ignoreExisting != null ? this.ignoreExisting.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosGroup.PolicyAttachmentsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosGroup.PolicyAttachmentsProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosGroup.PolicyDocumentProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosGroup.PolicyDocumentProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosGroup.StatementProperty")
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getResource() {
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
            java.lang.Object resource;

            /**
             * Sets the value of {@link StatementProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.util.List<? extends java.lang.Object> action) {
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
            public Builder condition(java.util.Map<java.lang.String, ? extends java.lang.Object> condition) {
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
             * Sets the value of {@link StatementProperty#getResource}
             * @param resource the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resource(java.util.List<? extends java.lang.Object> resource) {
                this.resource = resource;
                return this;
            }

            /**
             * Sets the value of {@link StatementProperty#getResource}
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosGroup.StatementProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.RosGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.RosGroup> {
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
        private final com.aliyun.ros.cdk.ram.RosGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RosGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param comments This parameter is required.
         */
        public Builder comments(final java.lang.String comments) {
            this.props.comments(comments);
            return this;
        }
        /**
         * @return {@code this}
         * @param comments This parameter is required.
         */
        public Builder comments(final com.aliyun.ros.cdk.core.IResolvable comments) {
            this.props.comments(comments);
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
         * @param ignoreExisting This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * @return {@code this}
         * @param ignoreExisting This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
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
        public Builder policyAttachments(final com.aliyun.ros.cdk.ram.RosGroup.PolicyAttachmentsProperty policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.RosGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.RosGroup build() {
            return new com.aliyun.ros.cdk.ram.RosGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
