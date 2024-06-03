package com.aliyun.ros.cdk.ram.datasource;

/**
 * Properties for defining a <code>Policies</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-policies
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:53.692Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.PoliciesProps")
@software.amazon.jsii.Jsii.Proxy(PoliciesProps.Jsii$Proxy.class)
public interface PoliciesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     * Property policyName: Filter the results by a specific policy name.
     * <p>
     * Supports using * and ?  to fuzzy match.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyName() {
        return null;
    }

    /**
     * Property policyType: Filter the results by a specific policy type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyType() {
        return null;
    }

    /**
     * Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleName() {
        return null;
    }

    /**
     * Property userName: The specific user to which policies attached.
     * <p>
     * Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PoliciesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PoliciesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PoliciesProps> {
        java.lang.Object groupName;
        java.lang.Object policyName;
        java.lang.Object policyType;
        java.lang.Object roleName;
        java.lang.Object userName;

        /**
         * Sets the value of {@link PoliciesProps#getGroupName}
         * @param groupName Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getGroupName}
         * @param groupName Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getPolicyName}
         * @param policyName Property policyName: Filter the results by a specific policy name.
         *                   Supports using * and ?  to fuzzy match.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getPolicyName}
         * @param policyName Property policyName: Filter the results by a specific policy name.
         *                   Supports using * and ?  to fuzzy match.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getPolicyType}
         * @param policyType Property policyType: Filter the results by a specific policy type.
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getPolicyType}
         * @param policyType Property policyType: Filter the results by a specific policy type.
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getRoleName}
         * @param roleName Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getRoleName}
         * @param roleName Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getUserName}
         * @param userName Property userName: The specific user to which policies attached.
         *                 Only one of UserName, GroupName, and RoleName can be specified at most.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link PoliciesProps#getUserName}
         * @param userName Property userName: The specific user to which policies attached.
         *                 Only one of UserName, GroupName, and RoleName can be specified at most.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PoliciesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PoliciesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PoliciesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PoliciesProps {
        private final java.lang.Object groupName;
        private final java.lang.Object policyName;
        private final java.lang.Object policyType;
        private final java.lang.Object roleName;
        private final java.lang.Object userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = builder.groupName;
            this.policyName = builder.policyName;
            this.policyType = builder.policyType;
            this.roleName = builder.roleName;
            this.userName = builder.userName;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.Object getRoleName() {
            return this.roleName;
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

            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getPolicyName() != null) {
                data.set("policyName", om.valueToTree(this.getPolicyName()));
            }
            if (this.getPolicyType() != null) {
                data.set("policyType", om.valueToTree(this.getPolicyType()));
            }
            if (this.getRoleName() != null) {
                data.set("roleName", om.valueToTree(this.getRoleName()));
            }
            if (this.getUserName() != null) {
                data.set("userName", om.valueToTree(this.getUserName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.datasource.PoliciesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PoliciesProps.Jsii$Proxy that = (PoliciesProps.Jsii$Proxy) o;

            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.policyName != null ? !this.policyName.equals(that.policyName) : that.policyName != null) return false;
            if (this.policyType != null ? !this.policyType.equals(that.policyType) : that.policyType != null) return false;
            if (this.roleName != null ? !this.roleName.equals(that.roleName) : that.roleName != null) return false;
            return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName != null ? this.groupName.hashCode() : 0;
            result = 31 * result + (this.policyName != null ? this.policyName.hashCode() : 0);
            result = 31 * result + (this.policyType != null ? this.policyType.hashCode() : 0);
            result = 31 * result + (this.roleName != null ? this.roleName.hashCode() : 0);
            result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
            return result;
        }
    }
}
