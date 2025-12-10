package com.aliyun.ros.cdk.cs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CS::GrantPermissions</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.144Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosGrantPermissions")
public class RosGrantPermissions extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGrantPermissions(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGrantPermissions(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cs.RosGrantPermissions.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGrantPermissions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.RosGrantPermissionsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPermissions() {
        return software.amazon.jsii.Kernel.get(this, "permissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPermissions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "permissions", java.util.Objects.requireNonNull(value, "permissions is required"));
    }

    /**
     */
    public void setPermissions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cs.RosGrantPermissions.PermissionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cs.RosGrantPermissions.PermissionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "permissions", java.util.Objects.requireNonNull(value, "permissions is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUserId() {
        return software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userId", java.util.Objects.requireNonNull(value, "userId is required"));
    }

    /**
     */
    public void setUserId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userId", java.util.Objects.requireNonNull(value, "userId is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosGrantPermissions.PermissionsProperty")
    @software.amazon.jsii.Jsii.Proxy(PermissionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PermissionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRoleName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRoleType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsCustom() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsRamRole() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PermissionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PermissionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PermissionsProperty> {
            java.lang.Object clusterId;
            java.lang.Object roleName;
            java.lang.Object roleType;
            java.lang.Object isCustom;
            java.lang.Object isRamRole;
            java.lang.Object namespace;

            /**
             * Sets the value of {@link PermissionsProperty#getClusterId}
             * @param clusterId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(java.lang.String clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getClusterId}
             * @param clusterId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getRoleName}
             * @param roleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleName(java.lang.String roleName) {
                this.roleName = roleName;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getRoleName}
             * @param roleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
                this.roleName = roleName;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getRoleType}
             * @param roleType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleType(java.lang.String roleType) {
                this.roleType = roleType;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getRoleType}
             * @param roleType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleType(com.aliyun.ros.cdk.core.IResolvable roleType) {
                this.roleType = roleType;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIsCustom}
             * @param isCustom the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isCustom(java.lang.Boolean isCustom) {
                this.isCustom = isCustom;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIsCustom}
             * @param isCustom the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isCustom(com.aliyun.ros.cdk.core.IResolvable isCustom) {
                this.isCustom = isCustom;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIsRamRole}
             * @param isRamRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isRamRole(java.lang.Boolean isRamRole) {
                this.isRamRole = isRamRole;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getIsRamRole}
             * @param isRamRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isRamRole(com.aliyun.ros.cdk.core.IResolvable isRamRole) {
                this.isRamRole = isRamRole;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(java.lang.String namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link PermissionsProperty#getNamespace}
             * @param namespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PermissionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PermissionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PermissionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PermissionsProperty {
            private final java.lang.Object clusterId;
            private final java.lang.Object roleName;
            private final java.lang.Object roleType;
            private final java.lang.Object isCustom;
            private final java.lang.Object isRamRole;
            private final java.lang.Object namespace;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleType = software.amazon.jsii.Kernel.get(this, "roleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isCustom = software.amazon.jsii.Kernel.get(this, "isCustom", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isRamRole = software.amazon.jsii.Kernel.get(this, "isRamRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
                this.roleName = java.util.Objects.requireNonNull(builder.roleName, "roleName is required");
                this.roleType = java.util.Objects.requireNonNull(builder.roleType, "roleType is required");
                this.isCustom = builder.isCustom;
                this.isRamRole = builder.isRamRole;
                this.namespace = builder.namespace;
            }

            @Override
            public final java.lang.Object getClusterId() {
                return this.clusterId;
            }

            @Override
            public final java.lang.Object getRoleName() {
                return this.roleName;
            }

            @Override
            public final java.lang.Object getRoleType() {
                return this.roleType;
            }

            @Override
            public final java.lang.Object getIsCustom() {
                return this.isCustom;
            }

            @Override
            public final java.lang.Object getIsRamRole() {
                return this.isRamRole;
            }

            @Override
            public final java.lang.Object getNamespace() {
                return this.namespace;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("clusterId", om.valueToTree(this.getClusterId()));
                data.set("roleName", om.valueToTree(this.getRoleName()));
                data.set("roleType", om.valueToTree(this.getRoleType()));
                if (this.getIsCustom() != null) {
                    data.set("isCustom", om.valueToTree(this.getIsCustom()));
                }
                if (this.getIsRamRole() != null) {
                    data.set("isRamRole", om.valueToTree(this.getIsRamRole()));
                }
                if (this.getNamespace() != null) {
                    data.set("namespace", om.valueToTree(this.getNamespace()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosGrantPermissions.PermissionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PermissionsProperty.Jsii$Proxy that = (PermissionsProperty.Jsii$Proxy) o;

                if (!clusterId.equals(that.clusterId)) return false;
                if (!roleName.equals(that.roleName)) return false;
                if (!roleType.equals(that.roleType)) return false;
                if (this.isCustom != null ? !this.isCustom.equals(that.isCustom) : that.isCustom != null) return false;
                if (this.isRamRole != null ? !this.isRamRole.equals(that.isRamRole) : that.isRamRole != null) return false;
                return this.namespace != null ? this.namespace.equals(that.namespace) : that.namespace == null;
            }

            @Override
            public final int hashCode() {
                int result = this.clusterId.hashCode();
                result = 31 * result + (this.roleName.hashCode());
                result = 31 * result + (this.roleType.hashCode());
                result = 31 * result + (this.isCustom != null ? this.isCustom.hashCode() : 0);
                result = 31 * result + (this.isRamRole != null ? this.isRamRole.hashCode() : 0);
                result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.RosGrantPermissions}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.RosGrantPermissions> {
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
        private final com.aliyun.ros.cdk.cs.RosGrantPermissionsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.RosGrantPermissionsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param permissions This parameter is required.
         */
        public Builder permissions(final com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.props.permissions(permissions);
            return this;
        }
        /**
         * @return {@code this}
         * @param permissions This parameter is required.
         */
        public Builder permissions(final java.util.List<? extends java.lang.Object> permissions) {
            this.props.permissions(permissions);
            return this;
        }

        /**
         * @return {@code this}
         * @param userId This parameter is required.
         */
        public Builder userId(final java.lang.String userId) {
            this.props.userId(userId);
            return this;
        }
        /**
         * @return {@code this}
         * @param userId This parameter is required.
         */
        public Builder userId(final com.aliyun.ros.cdk.core.IResolvable userId) {
            this.props.userId(userId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.RosGrantPermissions}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.RosGrantPermissions build() {
            return new com.aliyun.ros.cdk.cs.RosGrantPermissions(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
