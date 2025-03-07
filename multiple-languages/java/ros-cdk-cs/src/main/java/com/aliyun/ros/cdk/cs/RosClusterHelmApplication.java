package com.aliyun.ros.cdk.cs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CS::ClusterHelmApplication</code>, which is used to deploy an application by using Helm.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.492Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterHelmApplication")
public class RosClusterHelmApplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosClusterHelmApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosClusterHelmApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cs.RosClusterHelmApplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosClusterHelmApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.RosClusterHelmApplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitUntilData() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitUntilData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChartUrl() {
        return software.amazon.jsii.Kernel.get(this, "chartUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChartUrl(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chartUrl", java.util.Objects.requireNonNull(value, "chartUrl is required"));
    }

    /**
     */
    public void setChartUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chartUrl", java.util.Objects.requireNonNull(value, "chartUrl is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChartValues() {
        return software.amazon.jsii.Kernel.get(this, "chartValues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChartValues(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chartValues", value);
    }

    /**
     */
    public void setChartValues(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "chartValues", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCredential() {
        return software.amazon.jsii.Kernel.get(this, "credential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCredential(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "credential", value);
    }

    /**
     */
    public void setCredential(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosClusterHelmApplication.CredentialProperty value) {
        software.amazon.jsii.Kernel.set(this, "credential", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespace", value);
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespace", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRolePolicy() {
        return software.amazon.jsii.Kernel.get(this, "rolePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRolePolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rolePolicy", value);
    }

    /**
     */
    public void setRolePolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rolePolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getValidationMode() {
        return software.amazon.jsii.Kernel.get(this, "validationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setValidationMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "validationMode", value);
    }

    /**
     */
    public void setValidationMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "validationMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWaitUntil() {
        return software.amazon.jsii.Kernel.get(this, "waitUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWaitUntil(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "waitUntil", value);
    }

    /**
     */
    public void setWaitUntil(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cs.RosClusterHelmApplication.WaitUntilProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cs.RosClusterHelmApplication.WaitUntilProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "waitUntil", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterHelmApplication.CredentialProperty")
    @software.amazon.jsii.Jsii.Proxy(CredentialProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CredentialProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

        /**
         * @return a {@link Builder} of {@link CredentialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CredentialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CredentialProperty> {
            java.lang.Object password;
            java.lang.Object userName;

            /**
             * Sets the value of {@link CredentialProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link CredentialProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link CredentialProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link CredentialProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CredentialProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CredentialProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CredentialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CredentialProperty {
            private final java.lang.Object password;
            private final java.lang.Object userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
                this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("password", om.valueToTree(this.getPassword()));
                data.set("userName", om.valueToTree(this.getUserName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterHelmApplication.CredentialProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CredentialProperty.Jsii$Proxy that = (CredentialProperty.Jsii$Proxy) o;

                if (!password.equals(that.password)) return false;
                return this.userName.equals(that.userName);
            }

            @Override
            public final int hashCode() {
                int result = this.password.hashCode();
                result = 31 * result + (this.userName.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterHelmApplication.WaitUntilProperty")
    @software.amazon.jsii.Jsii.Proxy(WaitUntilProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WaitUntilProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKind();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOperator();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApiVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFirstMatch() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJsonPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
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
         * @return a {@link Builder} of {@link WaitUntilProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WaitUntilProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WaitUntilProperty> {
            java.lang.Object kind;
            java.lang.Object name;
            java.lang.Object operator;
            java.lang.Object apiVersion;
            java.lang.Object firstMatch;
            java.lang.Object jsonPath;
            java.lang.Object namespace;
            java.lang.Object stage;
            java.lang.Object timeout;
            java.lang.Object value;
            java.lang.Object valueType;

            /**
             * Sets the value of {@link WaitUntilProperty#getKind}
             * @param kind the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kind(java.lang.String kind) {
                this.kind = kind;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getKind}
             * @param kind the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kind(com.aliyun.ros.cdk.core.IResolvable kind) {
                this.kind = kind;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getOperator}
             * @param operator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operator(java.lang.String operator) {
                this.operator = operator;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getOperator}
             * @param operator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operator(com.aliyun.ros.cdk.core.IResolvable operator) {
                this.operator = operator;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getApiVersion}
             * @param apiVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiVersion(java.lang.String apiVersion) {
                this.apiVersion = apiVersion;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getApiVersion}
             * @param apiVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiVersion(com.aliyun.ros.cdk.core.IResolvable apiVersion) {
                this.apiVersion = apiVersion;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getFirstMatch}
             * @param firstMatch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder firstMatch(java.lang.Boolean firstMatch) {
                this.firstMatch = firstMatch;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getFirstMatch}
             * @param firstMatch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder firstMatch(com.aliyun.ros.cdk.core.IResolvable firstMatch) {
                this.firstMatch = firstMatch;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getJsonPath}
             * @param jsonPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jsonPath(java.lang.String jsonPath) {
                this.jsonPath = jsonPath;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getJsonPath}
             * @param jsonPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jsonPath(com.aliyun.ros.cdk.core.IResolvable jsonPath) {
                this.jsonPath = jsonPath;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(java.lang.String namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getStage}
             * @param stage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stage(java.lang.String stage) {
                this.stage = stage;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getStage}
             * @param stage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stage(com.aliyun.ros.cdk.core.IResolvable stage) {
                this.stage = stage;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getValueType}
             * @param valueType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder valueType(java.lang.String valueType) {
                this.valueType = valueType;
                return this;
            }

            /**
             * Sets the value of {@link WaitUntilProperty#getValueType}
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
             * @return a new instance of {@link WaitUntilProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WaitUntilProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WaitUntilProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WaitUntilProperty {
            private final java.lang.Object kind;
            private final java.lang.Object name;
            private final java.lang.Object operator;
            private final java.lang.Object apiVersion;
            private final java.lang.Object firstMatch;
            private final java.lang.Object jsonPath;
            private final java.lang.Object namespace;
            private final java.lang.Object stage;
            private final java.lang.Object timeout;
            private final java.lang.Object value;
            private final java.lang.Object valueType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.kind = software.amazon.jsii.Kernel.get(this, "kind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.operator = software.amazon.jsii.Kernel.get(this, "operator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apiVersion = software.amazon.jsii.Kernel.get(this, "apiVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.firstMatch = software.amazon.jsii.Kernel.get(this, "firstMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.jsonPath = software.amazon.jsii.Kernel.get(this, "jsonPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stage = software.amazon.jsii.Kernel.get(this, "stage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.valueType = software.amazon.jsii.Kernel.get(this, "valueType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.kind = java.util.Objects.requireNonNull(builder.kind, "kind is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.operator = java.util.Objects.requireNonNull(builder.operator, "operator is required");
                this.apiVersion = builder.apiVersion;
                this.firstMatch = builder.firstMatch;
                this.jsonPath = builder.jsonPath;
                this.namespace = builder.namespace;
                this.stage = builder.stage;
                this.timeout = builder.timeout;
                this.value = builder.value;
                this.valueType = builder.valueType;
            }

            @Override
            public final java.lang.Object getKind() {
                return this.kind;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getOperator() {
                return this.operator;
            }

            @Override
            public final java.lang.Object getApiVersion() {
                return this.apiVersion;
            }

            @Override
            public final java.lang.Object getFirstMatch() {
                return this.firstMatch;
            }

            @Override
            public final java.lang.Object getJsonPath() {
                return this.jsonPath;
            }

            @Override
            public final java.lang.Object getNamespace() {
                return this.namespace;
            }

            @Override
            public final java.lang.Object getStage() {
                return this.stage;
            }

            @Override
            public final java.lang.Object getTimeout() {
                return this.timeout;
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

                data.set("kind", om.valueToTree(this.getKind()));
                data.set("name", om.valueToTree(this.getName()));
                data.set("operator", om.valueToTree(this.getOperator()));
                if (this.getApiVersion() != null) {
                    data.set("apiVersion", om.valueToTree(this.getApiVersion()));
                }
                if (this.getFirstMatch() != null) {
                    data.set("firstMatch", om.valueToTree(this.getFirstMatch()));
                }
                if (this.getJsonPath() != null) {
                    data.set("jsonPath", om.valueToTree(this.getJsonPath()));
                }
                if (this.getNamespace() != null) {
                    data.set("namespace", om.valueToTree(this.getNamespace()));
                }
                if (this.getStage() != null) {
                    data.set("stage", om.valueToTree(this.getStage()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }
                if (this.getValueType() != null) {
                    data.set("valueType", om.valueToTree(this.getValueType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterHelmApplication.WaitUntilProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WaitUntilProperty.Jsii$Proxy that = (WaitUntilProperty.Jsii$Proxy) o;

                if (!kind.equals(that.kind)) return false;
                if (!name.equals(that.name)) return false;
                if (!operator.equals(that.operator)) return false;
                if (this.apiVersion != null ? !this.apiVersion.equals(that.apiVersion) : that.apiVersion != null) return false;
                if (this.firstMatch != null ? !this.firstMatch.equals(that.firstMatch) : that.firstMatch != null) return false;
                if (this.jsonPath != null ? !this.jsonPath.equals(that.jsonPath) : that.jsonPath != null) return false;
                if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
                if (this.stage != null ? !this.stage.equals(that.stage) : that.stage != null) return false;
                if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
                if (this.value != null ? !this.value.equals(that.value) : that.value != null) return false;
                return this.valueType != null ? this.valueType.equals(that.valueType) : that.valueType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.kind.hashCode();
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.operator.hashCode());
                result = 31 * result + (this.apiVersion != null ? this.apiVersion.hashCode() : 0);
                result = 31 * result + (this.firstMatch != null ? this.firstMatch.hashCode() : 0);
                result = 31 * result + (this.jsonPath != null ? this.jsonPath.hashCode() : 0);
                result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
                result = 31 * result + (this.stage != null ? this.stage.hashCode() : 0);
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                result = 31 * result + (this.valueType != null ? this.valueType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.RosClusterHelmApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.RosClusterHelmApplication> {
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
        private final com.aliyun.ros.cdk.cs.RosClusterHelmApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.RosClusterHelmApplicationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param chartUrl This parameter is required.
         */
        public Builder chartUrl(final java.lang.String chartUrl) {
            this.props.chartUrl(chartUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param chartUrl This parameter is required.
         */
        public Builder chartUrl(final com.aliyun.ros.cdk.core.IResolvable chartUrl) {
            this.props.chartUrl(chartUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param chartValues This parameter is required.
         */
        public Builder chartValues(final com.aliyun.ros.cdk.core.IResolvable chartValues) {
            this.props.chartValues(chartValues);
            return this;
        }
        /**
         * @return {@code this}
         * @param chartValues This parameter is required.
         */
        public Builder chartValues(final java.util.Map<java.lang.String, ? extends java.lang.Object> chartValues) {
            this.props.chartValues(chartValues);
            return this;
        }

        /**
         * @return {@code this}
         * @param credential This parameter is required.
         */
        public Builder credential(final com.aliyun.ros.cdk.core.IResolvable credential) {
            this.props.credential(credential);
            return this;
        }
        /**
         * @return {@code this}
         * @param credential This parameter is required.
         */
        public Builder credential(final com.aliyun.ros.cdk.cs.RosClusterHelmApplication.CredentialProperty credential) {
            this.props.credential(credential);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * @return {@code this}
         * @param rolePolicy This parameter is required.
         */
        public Builder rolePolicy(final java.lang.String rolePolicy) {
            this.props.rolePolicy(rolePolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param rolePolicy This parameter is required.
         */
        public Builder rolePolicy(final com.aliyun.ros.cdk.core.IResolvable rolePolicy) {
            this.props.rolePolicy(rolePolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param validationMode This parameter is required.
         */
        public Builder validationMode(final java.lang.String validationMode) {
            this.props.validationMode(validationMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param validationMode This parameter is required.
         */
        public Builder validationMode(final com.aliyun.ros.cdk.core.IResolvable validationMode) {
            this.props.validationMode(validationMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param waitUntil This parameter is required.
         */
        public Builder waitUntil(final com.aliyun.ros.cdk.core.IResolvable waitUntil) {
            this.props.waitUntil(waitUntil);
            return this;
        }
        /**
         * @return {@code this}
         * @param waitUntil This parameter is required.
         */
        public Builder waitUntil(final java.util.List<? extends java.lang.Object> waitUntil) {
            this.props.waitUntil(waitUntil);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.RosClusterHelmApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.RosClusterHelmApplication build() {
            return new com.aliyun.ros.cdk.cs.RosClusterHelmApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
